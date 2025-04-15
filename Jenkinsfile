pipeline {
  agent any

  stages {
    stage('Clean Old Containers') {
      steps {
        echo '🧹 Cleaning up previously running containers...'
        sh '''
          docker ps -aq --filter "name=university-mongo" | xargs -r docker rm -f
          docker ps -aq --filter "name=university-jenkins" | xargs -r docker rm -f
          docker-compose down --remove-orphans || true
        '''
      }
    }

    stage('Build') {
      steps {
        echo '🔧 Building services...'
        sh 'docker-compose build'
      }
    }

    stage('Run') {
      steps {
        echo '🚀 Running services...'
        sh 'docker-compose up -d'
      }
    }
  }
}
