#!/bin/sh

sh ./wait_for-it.sh db:5432
npx sequelize db:migrate
npm start
