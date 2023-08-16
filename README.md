This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Description

A logistics Company running multiple storage facility wants you to create an application for the front desk
employee.

The application named "FrontDeskApp" will be deployed at the facility front desk, it should allow the
following user stories:

1. As a FrontDeskApp user, I want to create a new storage customer from first name, last name, and
phone number personal information so that I can store and retrieve packages for that customer.

2. As a FrontDeskApp user, I want to check Small, Medium, or Large areas for availability in the
storage areas so I can accept or reject the customer box.

  a. Small boxes area only accepts small boxes; Medium boxes area only accepts medium
  boxes; Large boxes area only accepts large boxes.
  
  b. If there is enough availability for the customer box, FrontDeskApp should accept;
  otherwise inform user that boxes cannot be accepted (not enough space).

4. As a FrontDeskApp user, I want to record when boxes are stored / retrieved from the storage
facility.

## Database

Using MySQL (output_file.sql), I decided to use MySQL for Familiarity reasons and Knowledge Expansion.
I recently have worked with MySQL and I want to know further the things I can do with MySQL (like Stored Procedures).

Download the MySQL installer and import the "output_file" to it to have the DB locally.
