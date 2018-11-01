# User Stories
1.As an **administrator** I want to **add/delete volunteers**, so I can **maintain the record who are helping for organization and to provide access accordingly.**

**Acceptence Criteria:**
* Add new volunteer details so they can access the database with their credentials
    
* Delete the volunteer information, so they cannot access if they are not working in organization

2.As an **administrator** I want to **store the details of Donations**, So I can **store the details of items which I’m receiving from donors.**

**Acceptence Criteria:**
* Lists the details of the donors in the Donation module
* Able to make changes to the donations received from the donors, if there are any changes

3.As a **volunteer** I want to **send an email to the donor**, So I can **send a receipt of donated items and letter of appreciation**

**Acceptence Criteria:**
* Email the donor with the receipt containing items he donated to pantry
* Send an appreciation attached with the email

4.As a **volunteer** I want to **track the details of the items in the warehouse**, so I can **know about the availability of food items left in the warehouse.**

**Acceptence Criteria:**
*	Create separate module for Inventories
*	Searching items based on item code or item name

# Misuse Cases

1.As a **malicious user** I want to **launch a brute force attack on the login page** so I can **change all the details.**

**Mitigations:**
* Implementing account lockout policy 
* Having strong username and password

2.As a **disgruntled volunteer** I want to **enter the falsifying data into the records**, so I can **mishandle the donated items.**

**Mitigations:**
* Administrator should keep track on the volunteer activities
* Checking the inventories on daily basis.

# Diagrams

## Mockup

