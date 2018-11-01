# FoodPantry-App
The primary idea behind this project is a build an application for a non-profit organization to maintain a record for the food items receiving as donations and helps the low-income members of the community with emergency food relief. The application is used based on two different roles one is Administrator (who is the head of the organization) and Volunteers ( who provide service to organization). FoodPantry application has two different views for both admin and volunteer, where both can enter the donation information and can track the details of Inventories. This application can also send a receipt to the donor with the list of items donated and attached with appreciation note. The application uses Django as its backend platform and Ember as its frontend developing tool.

## Installation
You need to build the docker image from the provided DockerFile using Docker Compose. To do this, ensure docker is running, and then:

```bash
git clone --recursive https://github.com/karthikdamuluri/FoodPantry-App.git
cd FoodPantry-App
docker-compose build
```

Then Initialize the Django database
```bash
docker-compose run django bash
python manage.py migrate
python manage.py createsuperuser
```

## Getting Started

To run FoodPantry app simply,
```bash
docker-compose up
```
See in-app menus for help with using specific features.

# License
The MIT License (MIT)

Copyright (c) Matthew L. Hale 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
