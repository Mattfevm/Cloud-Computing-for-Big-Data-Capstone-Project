# Django Ecommerce 

This application is made with django.
## Installation Instructions

Follow these steps to setup the project.

1. Make sure to install ` Python 3 `, ` pip ` and ` virtualenv ` 
2. Install Virtualenv
    ```bash
        $ pip install virtualenv
    ```  
3. Create a project folder
   
    ```bash
        $ mkdir project
        $ cd project
    ```
4. Create a python 3 virtualenv, and activate the environment to install requirements.
    ```bash
        $ python3 -m venv env
        $ cd env/Scripts
        $ activate
        $ cd ../..
    ``` 
5. Extract the zip file and run the command
    ```bash
        (env)$ cd Ecommerce
    ```
6. Install the project dependencies from `requirements.txt`
    ```
        (env)$ pip install -r requirements.txt
    ``` 
You have now successfully set up the project on your environment.

## How to run  the project?

Make sure you are in `env` and then do the following each at a time.

```bash
(env)$ python manage.py makemigrations
(env)$ python manage.py migrate
(env)$ python manage.py createsuperuser
(env)$ python manage.py runserver
```

Project runs on

```bash
http://127.0.0.1:8000
```
To open Admin panel

```bash
http://127.0.0.1:8000/admin
```

## Features

### Product list View
List all products with Title, Price, Image.

### Search
List all products with the search query that you enter.

### Product Detail View
To view the complete product when clicked on Image or on the Title.

### Product Category View
View the product category.

### Login/Register
Users can Login/Register to the application.

### Create Products
Admin can create or edit Products and its collections.

## Technology Stacks

* **Language:**  Python 3.10.7
* **Framework:** Django 4.1.5

## Login Credentials

* **Admin User:**  Admin
* **Admin Password** Poland@01
* **Client User:** Client
* **Client Password** Poland@01

