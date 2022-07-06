import 'dotenv/config'
import { execSync } from 'child_process'

/**
 * @description script for compile and copy any file
 */
;(function () {
  // compile ormconfig into js file
  if (process.env.NODE_ENV == 'development') {
    execSync(
      'rimraf ormconfig.js && tsc src/configs/config.database.ts --outDir . -t esnext -m commonjs --moduleResolution node --skipLibCheck --esModuleInterop --pretty && mv config.database.js ormconfig.js'
    )
  } else {
    // copy file html templates into dist directory
    execSync('cp -r src/templates dist/templates')

    // copy pm2 config into dist directory
    execSync('cp -r pm2.config.js dist')
  }
})()
