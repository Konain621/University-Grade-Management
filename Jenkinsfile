pipeline {
  agent any

  environment {
    MONGO_URI = 'mongodb://mongo:27017/university'
  }

  stages {
    stage('Clone Repo') {
      steps {
        echo 'Cloning repo...'
      }
    }

    stage('Build App') {
      steps {
        echo 'Building Docker containers...'
        sh 'docker-compose build'
      }
    }

    stage('Run App') {
      steps {
        echo 'Running containers...'
        sh 'docker-compose up -d'
      }
    }
  }
}
