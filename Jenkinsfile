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
                        timeout(1){
                            script{
                                try{
                                    echo "running server"
                                    sh 'npm run dev'
                                }
                                catch(Throwable e){
                                    currentBuild.result = "SUCCESS"
                                }
                            }
                        }
                    }
                }
                stage('Run Cypress'){
                    steps{
                        sh '''
                            $(npm bin)/cypress run
                            
                        '''
                    }
                }
            }
        }
    }

}