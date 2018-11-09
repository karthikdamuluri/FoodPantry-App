# User Stories
1.As an **admin/volunteer** I want to **login to FoodPantry system**, so I can **change or track the activities on the food donations received.**

**Acceptance Criteria:**
* Login to the system using Username and Password

2.As an **administrator** I want to **add/delete/edit volunteer information**, so I can **maintain the record who are helping for organization and to provide access accordingly.**

**Acceptance Criteria:**
* Add/Delete volunteer details to keep track on volunteers helping in the organization.
* Edit the volunteer information if there are any changes.

3.As a **volunteer/admin** I want to **track the details of the items in the warehouse**, so I can **know about the availability of food items left in the warehouse.**

**Acceptance Criteria:**
*	Creating separate module for Inventories, to add the items  
*	Searching items based on item code or item name

4.As an **administrator** I want to **store the details of Donations**, So I can **store the details of items which I’m receiving from donors.**

**Acceptance Criteria:**
* Lists the details of the donors in the Donation module
* Able to perform CURD(Create,Update,Read,Delete) operations on donations received from the donors

5.As a **volunteer** I want to **send an email to the donor**, So I can **send a receipt of donated items and letter of appreciation**

**Acceptance Criteria:**
* Email the donor with the receipt containing items he donated to pantry
* Send an appreciation attached with the email

# Mis-user Stories

1.As a **malicious user** I want to **launch a brute force attack on the login page** so I can **change all the details.**

**Mitigations:**
* Implementing account lockout policy 
* Having strong username and password

2.As a **frustrated volunteer** I want to **enter the falsifying data into the records**, so I can **mishandle the donated items.**

**Mitigations:**
* Administrator should keep track on the volunteer activities
* Checking the inventories on daily basis.

3.As a **attacker** I want to **analyze the data in transit**, so I can **get the user credentials and able to track the activities on the server**.

**Mitigation**
* Encrypt the session between the client and server using SSL encryption

4.As a **attacker** I want to **perform SQL Injection attack on database**, so I can **alter the records in the database.**

**Mitigation**
* Use Django's QuerySets and Prepared statements.

# Diagrams

## Mockup Diagrams
###### mockup for userstory 1
![loginpage](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/login_screen.png)
![passwordrestpage](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/password_reset.png)
###### mockup for home_view of admin
![adminview](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/admin_view.png)
###### mockup for home_view of volunteer
![volunteerview](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/volunteer_view.png)
###### mockup for userstory 2
![volunteerpage](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/volunteer_page.png)
###### mockup for userstory 3 
![inventoryadd](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/Inventory_add.png)
![inventorydetails](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/Inventory_details.png)
###### mockup for userstory 4
![donationspage](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/donation_page.png)
###### mockup for userstory 5
![emailreceipt](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/mockups/Email_receipt.png)

## Context Diagram

![context_diagram](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/docs/context_diagram.PNG)

## Container Diagram

![Container_diagram](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/docs/Container_diagram.PNG)

## Component Diagram

![Component_diagram](https://github.com/karthikdamuluri/FoodPantry-App/blob/master/docs/component_diagram.PNG)


