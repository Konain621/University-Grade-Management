stage('Clean Old Containers') {
  steps {
    echo '🧹 Cleaning up previously running containers...'
    script {
      try {
        timeout(time: 15, unit: 'SECONDS') {
          sh '''
            docker rm -f university-nodeapp || true
            docker rm -f university-mongo || true
            docker rm -f university-jenkins || true
            docker-compose down --remove-orphans || true
          '''
        }
      } catch (err) {
        echo "⚠️ Timeout or failure during cleanup. Skipping... ${err}"
      }
    }
  }
}
