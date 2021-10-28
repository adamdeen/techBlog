pipeline{

    agent{
        docker{
            image "node:latest"
            args "-p 3000:3000"
        }
    }

    options{
        timestamps()
    }

    stages{

        stage('Build'){
            steps{
                sh 'npm run dev'
            }
        }

        stage('Test'){

        }

    }

}