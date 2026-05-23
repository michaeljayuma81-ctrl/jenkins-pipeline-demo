pipeline {
    agent any
    
    stages {
        stage('Job 1: Build') {
            steps {
                echo '========== JOB 1: BUILDING THE CODE =========='
                sh 'mvn clean compile'
                echo '✓ Build completed successfully!'
            }
        }
        
        stage('Job 2: Test') {
            steps {
                echo '========== JOB 2: TESTING THE CODE =========='
                sh 'mvn test'
                echo '✓ Tests completed successfully!'
            }
        }
        
        stage('Job 3: Prepare for Deployment') {
            steps {
                echo '========== JOB 3: PREPARING FOR DEPLOYMENT =========='
                sh 'mvn package'
                archiveArtifacts artifacts: 'target/*.jar', allowEmptyArchive: true
                echo '✓ Code prepared for deployment!'
            }
        }
    }
    
    post {
        always {
            echo '========== PIPELINE EXECUTION COMPLETE =========='
            echo "Build Number: ${BUILD_NUMBER}"
            echo "Build Status: ${currentBuild.result}"
        }
        success {
            echo '✓ Pipeline SUCCEEDED!'
        }
        failure {
            echo '✗ Pipeline FAILED!'
        }
    }
}
