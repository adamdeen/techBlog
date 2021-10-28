pipeline{

    agent any

    options{
        timestamps()
    }

    stages{

        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }

        stage('UI Tests'){
            parallel{
                stage('Start server'){
                    steps{
                        sh 'npm run dev'
                    }
                }
                stage('Run Cypress'){
                    steps{
                        sh 'npm run cy'
                    }
                }
            }
        }
    }

}