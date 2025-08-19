import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search,
  Server,
  Database,
  CreditCard,
  Zap,
  Brain,
  Code,
  ChevronRight,
  ChevronDown
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const categories = [
  {
    id: "laravel",
    name: "Laravel",
    icon: Code,
    topics: [
      { id: "installation", name: "Installation", description: "How to install Laravel framework" },
      { id: "routing", name: "Routing", description: "Learn Laravel routing system" },
      // { id: "controllers", name: "Controllers", description: "Creating and using controllers" },
      // { id: "models", name: "Models & Eloquent", description: "Database models and ORM" },
      // { id: "views", name: "Views & Blade", description: "Templates and views" },
      // { id: "middleware", name: "Middleware", description: "HTTP middleware" },
      // { id: "authentication", name: "Authentication", description: "User authentication" },
      // { id: "testing", name: "Testing", description: "Application testing" },
      { id: "encryption", name: "Encryption/Decryption", description: "How to encrypt/decrypt text in Laravel" },
      { id: "queues", name: "Queues", description: "How to use queues in Laravel" },
      { id: "cron-jobs", name: "Cron Jobs", description: "How to use cron jobs in Laravel" }
    ]
  },
  { 
    id: "nodejs", 
    name: "Node.js", 
    icon: Server,
    topics: [
      { id: "introduction", name: "Introduction", description: "Getting started with Node.js" },
      { id: "modules", name: "Modules", description: "CommonJS and ES modules" },
      // { id: "express", name: "Express.js", description: "Web framework for Node.js" },
      // { id: "file-system", name: "File System", description: "Working with files" },
      // { id: "streams", name: "Streams", description: "Node.js streams" },
      // { id: "async", name: "Async Programming", description: "Promises and async/await" },
      // { id: "npm", name: "NPM & Packages", description: "Package management" },
      // { id: "deployment", name: "Deployment", description: "Deploying Node.js apps" }
    ]
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    topics: [
      // { id: "sql-basics", name: "SQL Basics", description: "Fundamental SQL concepts" },
      // { id: "mysql", name: "MySQL", description: "MySQL database" },
      // { id: "orm", name: "ORMs", description: "Object-Relational Mapping" },
      { id: "cart-tables", name: "Cart & Cart Details Tables", description: "E-commerce cart table design" },
      { id: "order-tables", name: "Order & Order Details Tables", description: "E-commerce order table design" }
    ]
  },
  { 
    id: "payment-gateway", 
    name: "Payment Gateway", 
    icon: CreditCard,
    topics: [
      { id: "stripe", name: "Stripe Integration", description: "Stripe payment processing" },
      { id: "paypal", name: "PayPal Integration", description: "PayPal payment system" },
      // { id: "razorpay", name: "Razorpay", description: "Razorpay integration" },
      // { id: "security", name: "Payment Security", description: "Secure payment handling" },
      // { id: "webhooks", name: "Webhooks", description: "Payment webhooks" },
      // { id: "testing", name: "Testing Payments", description: "Testing payment flows" },
      // { id: "compliance", name: "PCI Compliance", description: "Payment compliance" },
      // { id: "refunds", name: "Refunds & Disputes", description: "Handling refunds" }
    ]
  },
  { 
    id: "apis", 
    name: "APIs", 
    icon: Zap,
    topics: [
      { id: "rest", name: "REST APIs", description: "RESTful API development" },
      { id: "graphql", name: "GraphQL", description: "GraphQL API development" },
      // { id: "authentication", name: "API Authentication", description: "Securing APIs" },
      // { id: "documentation", name: "API Documentation", description: "Documenting APIs" },
      // { id: "testing", name: "API Testing", description: "Testing APIs" },
      // { id: "versioning", name: "API Versioning", description: "Managing API versions" },
      // { id: "rate-limiting", name: "Rate Limiting", description: "API rate limiting" },
      // { id: "webhooks", name: "Webhooks", description: "API webhooks" }
    ]
  },
  { 
    id: "ai", 
    name: "AI", 
    icon: Brain,
    topics: [
      { id: "openai", name: "OpenAI Integration", description: "Using OpenAI APIs" },
      { id: "machine-learning", name: "Machine Learning", description: "ML fundamentals" },
      // { id: "nlp", name: "Natural Language Processing", description: "NLP techniques" },
      // { id: "computer-vision", name: "Computer Vision", description: "Image processing" },
      // { id: "chatbots", name: "Chatbots", description: "Building chatbots" },
      // { id: "recommendation", name: "Recommendation Systems", description: "Recommendation engines" },
      // { id: "ethics", name: "AI Ethics", description: "Responsible AI development" },
      // { id: "deployment", name: "AI Model Deployment", description: "Deploying AI models" }
    ]
  }
];

const topicContent: Record<string, Record<string, any>> = {
  laravel: {
    installation: {
      title: "Laravel Installation",
      content: `
# Laravel Installation

Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

## Via Laravel Installer

First, download the Laravel installer using Composer:

\`\`\`bash
composer global require laravel/installer
\`\`\`

Make sure to place Composer's system-wide vendor bin directory in your $PATH so the laravel executable can be located by your system.

Once installed, the \`laravel new\` command will create a fresh Laravel installation in the directory you specify:

\`\`\`bash
laravel new example-app
\`\`\`

## Via Composer Create-Project

Alternatively, you may install Laravel by issuing the Composer \`create-project\` command in your terminal:

\`\`\`bash
composer create-project laravel/laravel example-app
\`\`\`

## Local Development Server

If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the \`serve\` Artisan command:

\`\`\`bash
cd example-app
php artisan serve
\`\`\`

This command will start a development server at \`http://localhost:8000\`.
      `
    },
    routing: {
      title: "Laravel Routing",
      content: `
# Laravel Routing

The most basic Laravel routes accept a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files.

## Basic Routing

The most basic Laravel routes are defined in your \`routes/web.php\` file. These routes are assigned the web middleware group, which provides features like session state and CSRF protection.

\`\`\`php
<?php

use Illuminate\\Support\\Facades\\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});
\`\`\`

## Route Parameters

You may capture segments of the URI within your route by defining route parameters:

\`\`\`php
Route::get('/user/{id}', function (string $id) {
    return 'User '.$id;
});
\`\`\`

## Named Routes

Named routes allow the convenient generation of URLs or redirects for specific routes:

\`\`\`php
Route::get('/user/profile', function () {
    // ...
})->name('profile');
\`\`\`
      `
    },
    encryption: {
      title: "Laravel Encryption/Decryption",
      content: `
# Laravel Encryption/Decryption

Laravel provides a simple way to encrypt and decrypt text using the Crypt facade. Laravel's encryption services use OpenSSL to provide AES-256 and AES-128 encryption.

## Configuration

Before using Laravel's encrypter, you must set the \`key\` configuration option in your \`config/app.php\` configuration file. This configuration value is driven by the \`APP_KEY\` environment variable.

\`\`\`bash
php artisan key:generate
\`\`\`

## Encrypting Text

You can encrypt a value using the \`Crypt\` facade:

\`\`\`php
<?php

use Illuminate\\Support\\Facades\\Crypt;

// Encrypt text
$encrypted = Crypt::encrypt('Hello World');

// In a controller
public function encryptText(Request $request)
{
    $text = $request->input('text');
    $encrypted = Crypt::encrypt($text);

    return response()->json([
        'original' => $text,
        'encrypted' => $encrypted
    ]);
}
\`\`\`

## Decrypting Text

You can decrypt values using the \`decrypt\` method:

\`\`\`php
use Illuminate\\Support\\Facades\\Crypt;
use Illuminate\\Contracts\\Encryption\\DecryptException;

try {
    $decrypted = Crypt::decrypt($encrypted);
} catch (DecryptException $e) {
    // Handle decryption failure
    return 'Decryption failed';
}

// In a controller
public function decryptText(Request $request)
{
    try {
        $encryptedText = $request->input('encrypted_text');
        $decrypted = Crypt::decrypt($encryptedText);

        return response()->json([
            'encrypted' => $encryptedText,
            'decrypted' => $decrypted
        ]);
    } catch (DecryptException $e) {
        return response()->json(['error' => 'Invalid encrypted data'], 400);
    }
}
\`\`\`

## Encrypting Arrays

You can also encrypt arrays and objects:

\`\`\`php
$data = ['name' => 'John', 'email' => 'john@example.com'];
$encrypted = Crypt::encrypt($data);
$decrypted = Crypt::decrypt($encrypted);
\`\`\`

## Using in Models

You can automatically encrypt/decrypt model attributes:

\`\`\`php
<?php

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Support\\Facades\\Crypt;

class User extends Model
{
    protected $fillable = ['name', 'email', 'secret'];

    // Automatically encrypt when storing
    public function setSecretAttribute($value)
    {
        $this->attributes['secret'] = Crypt::encrypt($value);
    }

    // Automatically decrypt when retrieving
    public function getSecretAttribute($value)
    {
        return Crypt::decrypt($value);
    }
}
\`\`\`
      `
    },
    queues: {
      title: "Laravel Queues",
      content: `
# 

Laravel queues provide a unified queueing API across a variety of different queue backends, such as Amazon SQS, Redis, or even a relational database.

## Configuration

Queue configuration options are stored in the \`config/queue.php\` configuration file. The default queue driver is set in your \`.env\` file:

\`\`\`bash
QUEUE_CONNECTION=database
\`\`\`

## Database Queue Setup

If using database driver, create the jobs table:

\`\`\`bash
php artisan queue:table
php artisan migrate
\`\`\`

## Creating Jobs

Generate a job class using the Artisan command:

\`\`\`bash
php artisan make:job SendEmailJob
\`\`\`

This creates a job class in \`app/Jobs/SendEmailJob.php\`:

\`\`\`php
<?php

namespace App\\Jobs;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Queue\\SerializesModels;
use Illuminate\\Support\\Facades\\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $message;

    public function __construct($user, $message)
    {
        $this->user = $user;
        $this->message = $message;
    }

    public function handle()
    {
        // Send email logic here
        Mail::to($this->user->email)->send(new WelcomeEmail($this->message));
    }
}
\`\`\`

## Dispatching Jobs

Dispatch jobs to the queue:

\`\`\`php
use App\\Jobs\\SendEmailJob;

// Dispatch immediately
SendEmailJob::dispatch($user, $message);

// Dispatch with delay
SendEmailJob::dispatch($user, $message)->delay(now()->addMinutes(10));

// Dispatch to specific queue
SendEmailJob::dispatch($user, $message)->onQueue('emails');
\`\`\`

## Processing Queued Jobs

Run the queue worker to process jobs:

\`\`\`bash
# Process jobs continuously
php artisan queue:work

# Process jobs from specific queue
php artisan queue:work --queue=emails

# Process specific number of jobs
php artisan queue:work --max-jobs=10

# Process for specific time
php artisan queue:work --max-time=3600
\`\`\`

## Failed Jobs

Handle failed jobs:

\`\`\`bash
# Create failed jobs table
php artisan queue:failed-table
php artisan migrate

# View failed jobs
php artisan queue:failed

# Retry failed job
php artisan queue:retry 1

# Retry all failed jobs
php artisan queue:retry all
\`\`\`

## Job Batching

For processing multiple jobs as a batch:

\`\`\`php
use Illuminate\\Support\\Facades\\Bus;

$batch = Bus::batch([
    new ProcessFile('file1.csv'),
    new ProcessFile('file2.csv'),
    new ProcessFile('file3.csv'),
])->dispatch();
\`\`\`
      `
    },
    "cron-jobs": {
      title: "Laravel Cron Jobs",
      content: `
# Laravel Cron Jobs (Task Scheduling)

Laravel's command scheduler allows you to fluently and expressively define your command schedule within Laravel itself, and only a single Cron entry is needed on your server.

## Defining Schedules

All of your scheduled tasks are defined in the \`app/Console/Kernel.php\` file's \`schedule\` method:

\`\`\`php
<?php

namespace App\\Console;

use Illuminate\\Console\\Scheduling\\Schedule;
use Illuminate\\Foundation\\Console\\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        // Run command every minute
        $schedule->command('emails:send')->everyMinute();

        // Run command daily at 1:00 AM
        $schedule->command('backup:database')->dailyAt('01:00');

        // Run command weekly on Sunday at 2:00 AM
        $schedule->command('reports:generate')->weeklyOn(0, '02:00');

        // Run command monthly on the 1st at 3:00 AM
        $schedule->command('invoices:generate')->monthlyOn(1, '03:00');
    }
}
\`\`\`

## Creating Artisan Commands

First, create a custom Artisan command:

\`\`\`bash
php artisan make:command SendEmails
\`\`\`

This creates a command class in \`app/Console/Commands/SendEmails.php\`:

\`\`\`php
<?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use App\\Models\\User;
use App\\Jobs\\SendEmailJob;

class SendEmails extends Command
{
    protected $signature = 'emails:send';
    protected $description = 'Send emails to all users';

    public function handle()
    {
        $users = User::all();

        foreach ($users as $user) {
            SendEmailJob::dispatch($user, 'Daily newsletter');
        }

        $this->info('Emails queued successfully!');
    }
}
\`\`\`

## Schedule Frequency Options

Laravel provides many schedule frequency options:

\`\`\`php
// Every minute
$schedule->command('command:name')->everyMinute();

// Every five minutes
$schedule->command('command:name')->everyFiveMinutes();

// Every hour
$schedule->command('command:name')->hourly();

// Every hour at 30 minutes past the hour
$schedule->command('command:name')->hourlyAt(30);

// Daily at midnight
$schedule->command('command:name')->daily();

// Daily at specific time
$schedule->command('command:name')->dailyAt('13:00');

// Weekly
$schedule->command('command:name')->weekly();

// Monthly
$schedule->command('command:name')->monthly();

// Yearly
$schedule->command('command:name')->yearly();
\`\`\`

## Conditional Tasks

Run tasks based on conditions:

\`\`\`php
$schedule->command('emails:send')
         ->daily()
         ->when(function () {
             return config('app.env') === 'production';
         });

$schedule->command('backup:database')
         ->daily()
         ->skip(function () {
             return $this->isHoliday();
         });
\`\`\`

## Running Scheduled Tasks

Add this single Cron entry to your server:

\`\`\`bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
\`\`\`

## Testing Scheduled Tasks

Test your scheduled tasks locally:

\`\`\`bash
# Run all scheduled tasks that are due
php artisan schedule:run

# List all scheduled tasks
php artisan schedule:list

# Test a specific command
php artisan emails:send
\`\`\`

## Task Output and Logging

Log output from scheduled tasks:

\`\`\`php
$schedule->command('backup:database')
         ->daily()
         ->sendOutputTo('/path/to/log/file.log')
         ->emailOutputTo('admin@example.com');
\`\`\`

## Preventing Task Overlaps

Prevent tasks from overlapping:

\`\`\`php
$schedule->command('backup:database')
         ->daily()
         ->withoutOverlapping();
\`\`\`
      `
    }
  },
  nodejs: {
    introduction: {
      title: "Introduction to Node.js",
      content: `
# Introduction to Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

## What is Node.js?

Node.js is not a programming language or a framework. It's a runtime environment that allows you to run JavaScript on the server side.

## Key Features

- **Asynchronous and Event-Driven**: All APIs of Node.js library are asynchronous
- **Single Threaded**: Uses a single threaded model with event looping
- **Cross Platform**: Runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
- **Fast**: Built on Google Chrome's V8 JavaScript Engine

## Installation

Visit the official Node.js website and download the installer for your operating system:

\`\`\`bash
# Check if Node.js is installed
node --version

# Check npm version
npm --version
\`\`\`

## Your First Node.js Application

Create a file named \`app.js\`:

\`\`\`javascript
console.log('Hello World from Node.js!');
\`\`\`

Run it:

\`\`\`bash
node app.js
\`\`\`
      `
    },
    modules: {
      title: "Node.js Modules",
      content: `
# Node.js Modules

Node.js uses modules to organize code. There are three types of modules: Core modules, File-based modules, and node_modules.

## Core Modules

Node.js comes with built-in modules:

\`\`\`javascript
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const crypto = require('crypto');
\`\`\`

## Creating Custom Modules

Create a module \`math.js\`:

\`\`\`javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
\`\`\`

Use the module:

\`\`\`javascript
// app.js
const math = require('./math');

console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
\`\`\`

## ES6 Modules

Modern Node.js supports ES6 import/export syntax:

\`\`\`javascript
// math.mjs
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
\`\`\`

\`\`\`javascript
// app.mjs
import { add, subtract } from './math.mjs';

console.log(add(5, 3)); // 8
\`\`\`
      `
    },
    express: {
      title: "Express.js Framework",
      content: `
# Express.js Framework

Express is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.

## Installation

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

## Routing

\`\`\`javascript
// GET route
app.get('/users', (req, res) => {
    res.json({ users: [] });
});

// POST route
app.post('/users', (req, res) => {
    res.json({ message: 'User created' });
});

// PUT route
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: \`User \${id} updated\` });
});

// DELETE route
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: \`User \${id} deleted\` });
});
\`\`\`

## Middleware

\`\`\`javascript
// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.path} - \${Date.now()}\`);
    next();
});

// Route-specific middleware
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route' });
});

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    next();
}
\`\`\`
      `
    }
  },
  database: {
    "sql-basics": {
      title: "SQL Basics",
      content: `
# SQL Basics

SQL (Structured Query Language) is used to communicate with databases. It's the standard language for relational database management systems.

## Basic SQL Commands

### SELECT Statement

\`\`\`sql
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Select with condition
SELECT * FROM users WHERE age > 18;

-- Select with multiple conditions
SELECT * FROM users WHERE age > 18 AND city = 'New York';
\`\`\`

### INSERT Statement

\`\`\`sql
-- Insert single record
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@example.com', 25);

-- Insert multiple records
INSERT INTO users (name, email, age) VALUES
('Jane Smith', 'jane@example.com', 30),
('Bob Johnson', 'bob@example.com', 22);
\`\`\`

### UPDATE Statement

\`\`\`sql
-- Update single record
UPDATE users SET age = 26 WHERE id = 1;

-- Update multiple fields
UPDATE users SET name = 'John Smith', email = 'johnsmith@example.com'
WHERE id = 1;
\`\`\`

### DELETE Statement

\`\`\`sql
-- Delete specific record
DELETE FROM users WHERE id = 1;

-- Delete with condition
DELETE FROM users WHERE age < 18;
\`\`\`

## Common SQL Functions

\`\`\`sql
-- Count records
SELECT COUNT(*) FROM users;

-- Get maximum value
SELECT MAX(age) FROM users;

-- Get minimum value
SELECT MIN(age) FROM users;

-- Get average
SELECT AVG(age) FROM users;

-- Group by
SELECT city, COUNT(*) FROM users GROUP BY city;
\`\`\`
      `
    },
    mysql: {
      title: "MySQL Database",
      content: `
# MySQL Database

MySQL is one of the most popular open-source relational database management systems.

## Installation

### Ubuntu/Debian
\`\`\`bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
\`\`\`

### macOS (using Homebrew)
\`\`\`bash
brew install mysql
brew services start mysql
\`\`\`

## Basic MySQL Commands

### Connect to MySQL
\`\`\`bash
mysql -u root -p
\`\`\`

### Database Operations
\`\`\`sql
-- Create database
CREATE DATABASE myapp;

-- Use database
USE myapp;

-- Show databases
SHOW DATABASES;

-- Drop database
DROP DATABASE myapp;
\`\`\`

### Table Operations
\`\`\`sql
-- Create table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Show tables
SHOW TABLES;

-- Describe table structure
DESCRIBE users;

-- Drop table
DROP TABLE users;
\`\`\`

## Data Types

\`\`\`sql
-- Numeric types
INT, BIGINT, DECIMAL(10,2), FLOAT, DOUBLE

-- String types
VARCHAR(255), TEXT, CHAR(10)

-- Date/Time types
DATE, TIME, DATETIME, TIMESTAMP

-- Boolean
BOOLEAN (TINYINT(1))
\`\`\`

## Indexes

\`\`\`sql
-- Create index
CREATE INDEX idx_email ON users(email);

-- Create composite index
CREATE INDEX idx_name_email ON users(name, email);

-- Drop index
DROP INDEX idx_email ON users;
\`\`\`

## Backup and Restore

\`\`\`bash
# Backup database
mysqldump -u root -p myapp > backup.sql

# Restore database
mysql -u root -p myapp < backup.sql
\`\`\`
      `
    },
    mongodb: {
      title: "MongoDB Database",
      content: `
# MongoDB Database

MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.

## Installation

### Ubuntu/Debian
\`\`\`bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
\`\`\`

### macOS (using Homebrew)
\`\`\`bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
\`\`\`

## Basic MongoDB Operations

### Connect to MongoDB
\`\`\`bash
mongosh
\`\`\`

### Database Operations
\`\`\`javascript
// Show databases
show dbs

// Use database
use myapp

// Show current database
db

// Drop database
db.dropDatabase()
\`\`\`

### Collection Operations
\`\`\`javascript
// Show collections
show collections

// Create collection
db.createCollection("users")

// Drop collection
db.users.drop()
\`\`\`

## CRUD Operations

### Insert Documents
\`\`\`javascript
// Insert single document
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    city: "New York"
})

// Insert multiple documents
db.users.insertMany([
    { name: "Jane Smith", email: "jane@example.com", age: 30 },
    { name: "Bob Johnson", email: "bob@example.com", age: 22 }
])
\`\`\`

### Find Documents
\`\`\`javascript
// Find all documents
db.users.find()

// Find with condition
db.users.find({ age: { $gt: 18 } })

// Find one document
db.users.findOne({ email: "john@example.com" })

// Find with projection
db.users.find({}, { name: 1, email: 1, _id: 0 })
\`\`\`

### Update Documents
\`\`\`javascript
// Update one document
db.users.updateOne(
    { email: "john@example.com" },
    { $set: { age: 26 } }
)

// Update multiple documents
db.users.updateMany(
    { city: "New York" },
    { $set: { country: "USA" } }
)
\`\`\`

### Delete Documents
\`\`\`javascript
// Delete one document
db.users.deleteOne({ email: "john@example.com" })

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 18 } })
\`\`\`

## Aggregation

\`\`\`javascript
// Group by age
db.users.aggregate([
    { $group: { _id: "$age", count: { $sum: 1 } } }
])

// Match and sort
db.users.aggregate([
    { $match: { age: { $gte: 18 } } },
    { $sort: { age: 1 } }
])
\`\`\`
      `
    },
    "cart-tables": {
      title: "E-commerce Cart & Cart Details Tables",
      content: `
# E-commerce Cart & Cart Details Tables

Complete SQL table design for e-commerce shopping cart functionality with cart and cart details tables.

## Cart Table Structure

The cart table stores the main cart information for each user with totals and status.

### Cart Table Design

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
    <thead>
      <tr style="background-color: #f8f9fa;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Column</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Data Type</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Constraints</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">PRIMARY KEY, AUTO_INCREMENT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unique cart identifier</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>user_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to users table</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>sub_total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Subtotal before discounts</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>discount</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Discount amount applied</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>coupon_code</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Applied coupon code</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>tax</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Tax amount</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>delivery_charge</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Shipping/delivery cost</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Final total amount</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_active</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Active status (1=active, 0=inactive)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_deleted</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Soft delete (1=deleted, 0=not deleted)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>created_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Record creation timestamp</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>updated_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Last update timestamp</td>
      </tr>
    </tbody>
  </table>
</div>

### Cart Table SQL

\`\`\`sql
CREATE TABLE cart (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    sub_total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    discount DECIMAL(10,2) DEFAULT 0.00,
    coupon_code VARCHAR(50) NULL,
    tax DECIMAL(10,2) DEFAULT 0.00,
    delivery_charge DECIMAL(10,2) DEFAULT 0.00,
    total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    is_active TINYINT(1) DEFAULT 1,
    is_deleted TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_is_active (is_active),
    INDEX idx_is_deleted (is_deleted)
);
\`\`\`

## Cart Details Table Structure

The cart_details table stores individual products added to the cart with their specific attributes.

### Cart Details Table Design

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
    <thead>
      <tr style="background-color: #f8f9fa;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Column</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Data Type</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Constraints</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">PRIMARY KEY, AUTO_INCREMENT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unique cart detail identifier</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>cart_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to cart table</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>product_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to products table</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>price</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unit price of product</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>quantity</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">INT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Product quantity</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>color</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Selected product color</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>size</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Selected product size</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Line total (price × quantity)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_active</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Active status</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_deleted</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Soft delete status</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>created_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Record creation timestamp</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>updated_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Last update timestamp</td>
      </tr>
    </tbody>
  </table>
</div>

### Cart Details Table SQL

\`\`\`sql
CREATE TABLE cart_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cart_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    color VARCHAR(50) NULL,
    size VARCHAR(50) NULL,
    total DECIMAL(10,2) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    is_deleted TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_cart_id (cart_id),
    INDEX idx_product_id (product_id),
    INDEX idx_is_active (is_active),
    INDEX idx_is_deleted (is_deleted)
);
\`\`\`

## Sample Data and Queries

### Insert Sample Cart Data

\`\`\`sql
-- Insert cart
INSERT INTO cart (user_id, sub_total, discount, coupon_code, tax, delivery_charge, total)
VALUES (1, 150.00, 15.00, 'SAVE10', 13.50, 10.00, 158.50);

-- Insert cart details
INSERT INTO cart_details (cart_id, product_id, price, quantity, color, size, total) VALUES
(1, 101, 50.00, 2, 'Red', 'M', 100.00),
(1, 102, 25.00, 2, 'Blue', 'L', 50.00);
\`\`\`

### Useful Queries

\`\`\`sql
-- Get cart with details
SELECT c.*, cd.product_id, cd.quantity, cd.price, cd.total as line_total
FROM cart c
JOIN cart_details cd ON c.id = cd.cart_id
WHERE c.user_id = 1 AND c.is_active = 1 AND c.is_deleted = 0;

-- Update cart total
UPDATE cart
SET total = (
    SELECT SUM(cd.total)
    FROM cart_details cd
    WHERE cd.cart_id = cart.id AND cd.is_deleted = 0
) + tax + delivery_charge - discount
WHERE id = 1;
\`\`\`
      `
    },
    "order-tables": {
      title: "E-commerce Order & Order Details Tables",
      content: `
# E-commerce Order & Order Details Tables

Complete SQL table design for e-commerce order management with order and order details tables.

## Order Table Structure

The order table stores the main order information with payment and delivery details.

### Order Table Design

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
    <thead>
      <tr style="background-color: #f8f9fa;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Column</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Data Type</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Constraints</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">PRIMARY KEY, AUTO_INCREMENT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unique order identifier</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>user_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to users table</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>sub_total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Subtotal before discounts</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>discount</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Discount amount applied</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>coupon_code</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Applied coupon code</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>tax</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Tax amount</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>delivery_charge</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Shipping/delivery cost</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 0.00</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Final total amount</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>status</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">ENUM</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 'pending'</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Order status (pending, confirmed, processing, shipped, delivered, cancelled)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>address_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to addresses table</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>payment_type</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">ENUM</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Payment method (cash, card, upi, wallet, bank_transfer)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>payment_status</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">ENUM</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 'pending'</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Payment status (pending, paid, failed, refunded)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>cancel</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Cancellation status (1=cancelled, 0=not cancelled)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>cancel_by</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">ENUM</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Who cancelled (customer, admin, system)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_active</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Active status</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_deleted</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Soft delete status</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>created_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Order creation timestamp</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>updated_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Last update timestamp</td>
      </tr>
    </tbody>
  </table>
</div>

### Order Table SQL

\`\`\`sql
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    sub_total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    discount DECIMAL(10,2) DEFAULT 0.00,
    coupon_code VARCHAR(50) NULL,
    tax DECIMAL(10,2) DEFAULT 0.00,
    delivery_charge DECIMAL(10,2) DEFAULT 0.00,
    total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    status ENUM('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    address_id BIGINT NULL,
    payment_type ENUM('cash', 'card', 'upi', 'wallet', 'bank_transfer') NOT NULL,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    cancel TINYINT(1) DEFAULT 0,
    cancel_by ENUM('customer', 'admin', 'system') NULL,
    is_active TINYINT(1) DEFAULT 1,
    is_deleted TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES addresses(id) ON DELETE SET NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status),
    INDEX idx_payment_status (payment_status),
    INDEX idx_is_active (is_active),
    INDEX idx_is_deleted (is_deleted),
    INDEX idx_created_at (created_at)
);
\`\`\`

## Order Details Table Structure

The order_details table stores individual products in each order with their specific attributes.

### Order Details Table Design

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
    <thead>
      <tr style="background-color: #f8f9fa;">
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Column</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Data Type</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Constraints</th>
        <th style="padding: 12px; border: 1px solid #ddd; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">PRIMARY KEY, AUTO_INCREMENT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unique order detail identifier</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>order_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to orders table</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>product_id</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">BIGINT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL, FOREIGN KEY</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Reference to products table</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>price</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Unit price at time of order</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>quantity</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">INT</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Product quantity ordered</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>color</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Selected product color</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>size</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">VARCHAR(50)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Selected product size</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>total</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">DECIMAL(10,2)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">NOT NULL</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Line total (price × quantity)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_active</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 1</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Active status</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>is_deleted</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TINYINT(1)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT 0</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Soft delete status</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>created_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Record creation timestamp</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>updated_at</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Last update timestamp</td>
      </tr>
    </tbody>
  </table>
</div>

### Order Details Table SQL

\`\`\`sql
CREATE TABLE order_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    color VARCHAR(50) NULL,
    size VARCHAR(50) NULL,
    total DECIMAL(10,2) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    is_deleted TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_order_id (order_id),
    INDEX idx_product_id (product_id),
    INDEX idx_is_active (is_active),
    INDEX idx_is_deleted (is_deleted)
);
\`\`\`

## Sample Data and Queries

### Insert Sample Order Data

\`\`\`sql
-- Insert order
INSERT INTO orders (user_id, sub_total, discount, coupon_code, tax, delivery_charge, total, status, payment_type, payment_status)
VALUES (1, 150.00, 15.00, 'SAVE10', 13.50, 10.00, 158.50, 'confirmed', 'card', 'paid');

-- Insert order details
INSERT INTO order_details (order_id, product_id, price, quantity, color, size, total) VALUES
(1, 101, 50.00, 2, 'Red', 'M', 100.00),
(1, 102, 25.00, 2, 'Blue', 'L', 50.00);
\`\`\`

### Useful Queries

\`\`\`sql
-- Get order with details
SELECT o.*, od.product_id, od.quantity, od.price, od.total as line_total
FROM orders o
JOIN order_details od ON o.id = od.order_id
WHERE o.user_id = 1 AND o.is_deleted = 0;

-- Get orders by status
SELECT * FROM orders
WHERE status = 'delivered' AND is_deleted = 0
ORDER BY created_at DESC;

-- Get order summary
SELECT
    COUNT(*) as total_orders,
    SUM(total) as total_revenue,
    AVG(total) as avg_order_value
FROM orders
WHERE payment_status = 'paid' AND is_deleted = 0;
\`\`\`
      `
    }
  },
  "payment-gateway": {
    stripe: {
      title: "Stripe Payment Integration",
      content: `
# Stripe Payment Integration

Stripe is a popular payment processing platform that allows businesses to accept payments online.

## Setup

### Installation
\`\`\`bash
npm install stripe
\`\`\`

### Environment Variables
\`\`\`bash
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
\`\`\`

## Backend Integration (Node.js)

### Initialize Stripe
\`\`\`javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
\`\`\`

### Create Payment Intent
\`\`\`javascript
app.post('/create-payment-intent', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Stripe uses cents
            currency: currency || 'usd',
            metadata: {
                order_id: 'order_123'
            }
        });

        res.send({
            client_secret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).send({
            error: {
                message: error.message
            }
        });
    }
});
\`\`\`

### Create Customer
\`\`\`javascript
app.post('/create-customer', async (req, res) => {
    const { email, name } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: email,
            name: name
        });

        res.send({ customer_id: customer.id });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
\`\`\`

## Frontend Integration

### HTML Setup
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <script src="https://js.stripe.com/v3/"></script>
</head>
<body>
    <form id="payment-form">
        <div id="card-element">
            <!-- Stripe Elements will create form elements here -->
        </div>
        <button id="submit-button">Pay Now</button>
    </form>
</body>
</html>
\`\`\`

### JavaScript Integration
\`\`\`javascript
const stripe = Stripe('pk_test_...');
const elements = stripe.elements();

// Create card element
const cardElement = elements.create('card');
cardElement.mount('#card-element');

// Handle form submission
document.getElementById('payment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Create payment intent
    const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: 50, // $50.00
            currency: 'usd'
        })
    });

    const { client_secret } = await response.json();

    // Confirm payment
    const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: cardElement,
            billing_details: {
                name: 'Customer Name'
            }
        }
    });

    if (result.error) {
        console.error(result.error.message);
    } else {
        console.log('Payment succeeded!');
    }
});
\`\`\`

## Webhooks

\`\`\`javascript
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = 'whsec_...';

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(\`Webhook signature verification failed.\`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('Payment succeeded:', paymentIntent.id);
            break;
        case 'payment_intent.payment_failed':
            const failedPayment = event.data.object;
            console.log('Payment failed:', failedPayment.id);
            break;
        default:
            console.log(\`Unhandled event type \${event.type}\`);
    }

    res.json({received: true});
});
\`\`\`
      `
    },
    paypal: {
      title: "PayPal Integration",
      content: `
# PayPal Payment Integration

PayPal provides APIs to accept payments from PayPal accounts and credit cards.

## Setup

### Installation
\`\`\`bash
npm install @paypal/checkout-server-sdk
\`\`\`

### Environment Variables
\`\`\`bash
PAYPAL_CLIENT_ID=your_client_id
PAYPAL_CLIENT_SECRET=your_client_secret
PAYPAL_MODE=sandbox # or live
\`\`\`

## Backend Integration (Node.js)

### PayPal Configuration
\`\`\`javascript
const paypal = require('@paypal/checkout-server-sdk');

function environment() {
    let clientId = process.env.PAYPAL_CLIENT_ID;
    let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    return process.env.PAYPAL_MODE === 'live'
        ? new paypal.core.LiveEnvironment(clientId, clientSecret)
        : new paypal.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
    return new paypal.core.PayPalHttpClient(environment());
}
\`\`\`

### Create Order
\`\`\`javascript
app.post('/api/paypal/create-order', async (req, res) => {
    const { amount, currency } = req.body;

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: currency || 'USD',
                value: amount
            }
        }]
    });

    try {
        const order = await client().execute(request);
        res.json({ id: order.result.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
\`\`\`

### Capture Order
\`\`\`javascript
app.post('/api/paypal/capture-order', async (req, res) => {
    const { orderID } = req.body;

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    try {
        const capture = await client().execute(request);
        res.json({ capture: capture.result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
\`\`\`

## Frontend Integration

### HTML Setup
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
</head>
<body>
    <div id="paypal-button-container"></div>
</body>
</html>
\`\`\`

### JavaScript Integration
\`\`\`javascript
paypal.Buttons({
    createOrder: async function(data, actions) {
        const response = await fetch('/api/paypal/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: '50.00',
                currency: 'USD'
            })
        });

        const order = await response.json();
        return order.id;
    },

    onApprove: async function(data, actions) {
        const response = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        });

        const capture = await response.json();
        console.log('Payment captured:', capture);
    },

    onError: function(err) {
        console.error('PayPal error:', err);
    }
}).render('#paypal-button-container');
\`\`\`

## Webhooks

\`\`\`javascript
app.post('/paypal-webhook', express.json(), (req, res) => {
    const event = req.body;

    switch (event.event_type) {
        case 'PAYMENT.CAPTURE.COMPLETED':
            console.log('Payment completed:', event.resource);
            // Update your database
            break;
        case 'PAYMENT.CAPTURE.DENIED':
            console.log('Payment denied:', event.resource);
            break;
        default:
            console.log('Unhandled event:', event.event_type);
    }

    res.status(200).send('OK');
});
\`\`\`
      `
    }
  },
  apis: {
    rest: {
      title: "REST APIs Development",
      content: `
# REST APIs Development

REST (Representational State Transfer) is an architectural style for designing networked applications.

## REST Principles

### 1. Client-Server Architecture
- Separation of concerns between client and server
- Client handles user interface
- Server handles data storage and business logic

### 2. Stateless
- Each request contains all information needed to process it
- Server doesn't store client context between requests

### 3. Cacheable
- Responses should be cacheable when appropriate
- Improves performance and scalability

### 4. Uniform Interface
- Standard HTTP methods (GET, POST, PUT, DELETE)
- Consistent resource naming conventions

## HTTP Methods

\`\`\`javascript
// GET - Retrieve data
app.get('/api/users', (req, res) => {
    // Return all users
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    // Return specific user
    const user = users.find(u => u.id === req.params.id);
    res.json(user);
});

// POST - Create new resource
app.post('/api/users', (req, res) => {
    const newUser = {
        id: generateId(),
        ...req.body,
        createdAt: new Date()
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT - Update entire resource
app.put('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        users[index] = { ...req.body, id: req.params.id };
        res.json(users[index]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// PATCH - Partial update
app.patch('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// DELETE - Remove resource
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});
\`\`\`

## Status Codes

\`\`\`javascript
// Success codes
200 - OK (GET, PUT, PATCH)
201 - Created (POST)
204 - No Content (DELETE)

// Client error codes
400 - Bad Request
401 - Unauthorized
403 - Forbidden
404 - Not Found
409 - Conflict
422 - Unprocessable Entity

// Server error codes
500 - Internal Server Error
502 - Bad Gateway
503 - Service Unavailable
\`\`\`

## Error Handling

\`\`\`javascript
// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err.type === 'validation') {
        return res.status(422).json({
            error: 'Validation Error',
            details: err.errors
        });
    }

    if (err.type === 'authentication') {
        return res.status(401).json({
            error: 'Authentication Required'
        });
    }

    res.status(500).json({
        error: 'Internal Server Error'
    });
});

// Async error handling wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/api/users/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
}));
\`\`\`

## Pagination

\`\`\`javascript
app.get('/api/users', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = users.length;
    const paginatedUsers = users.slice(skip, skip + limit);

    res.json({
        data: paginatedUsers,
        pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
        }
    });
});
\`\`\`

## Filtering and Sorting

\`\`\`javascript
app.get('/api/users', (req, res) => {
    let filteredUsers = [...users];

    // Filtering
    if (req.query.name) {
        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
    }

    if (req.query.age) {
        filteredUsers = filteredUsers.filter(user =>
            user.age === parseInt(req.query.age)
        );
    }

    // Sorting
    if (req.query.sort) {
        const sortField = req.query.sort;
        const sortOrder = req.query.order === 'desc' ? -1 : 1;

        filteredUsers.sort((a, b) => {
            if (a[sortField] < b[sortField]) return -1 * sortOrder;
            if (a[sortField] > b[sortField]) return 1 * sortOrder;
            return 0;
        });
    }

    res.json(filteredUsers);
});
\`\`\`
      `
    },
    graphql: {
      title: "GraphQL API Development",
      content: `
# GraphQL API Development

GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need.

## Setup

### Installation
\`\`\`bash
npm install apollo-server-express graphql
\`\`\`

### Basic Server Setup
\`\`\`javascript
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Sample data
const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', posts: ['1', '2'] },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', posts: ['3'] }
];

const posts = [
    { id: '1', title: 'GraphQL Basics', content: 'Learning GraphQL...', authorId: '1' },
    { id: '2', title: 'Advanced GraphQL', content: 'Advanced concepts...', authorId: '1' },
    { id: '3', title: 'API Design', content: 'Designing APIs...', authorId: '2' }
];

// Type definitions
const typeDefs = gql\`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        posts: [Post!]!
        post(id: ID!): Post
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
        createPost(title: String!, content: String!, authorId: ID!): Post!
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): Boolean!
    }
\`;

// Resolvers
const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id === id),
        posts: () => posts,
        post: (_, { id }) => posts.find(post => post.id === id)
    },

    Mutation: {
        createUser: (_, { name, email }) => {
            const newUser = {
                id: String(users.length + 1),
                name,
                email,
                posts: []
            };
            users.push(newUser);
            return newUser;
        },

        createPost: (_, { title, content, authorId }) => {
            const newPost = {
                id: String(posts.length + 1),
                title,
                content,
                authorId
            };
            posts.push(newPost);
            return newPost;
        },

        updateUser: (_, { id, name, email }) => {
            const user = users.find(u => u.id === id);
            if (user) {
                if (name) user.name = name;
                if (email) user.email = email;
                return user;
            }
            return null;
        },

        deleteUser: (_, { id }) => {
            const index = users.findIndex(u => u.id === id);
            if (index !== -1) {
                users.splice(index, 1);
                return true;
            }
            return false;
        }
    },

    User: {
        posts: (user) => posts.filter(post => post.authorId === user.id)
    },

    Post: {
        author: (post) => users.find(user => user.id === post.authorId)
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(\`Server ready at http://localhost:4000\${server.graphqlPath}\`);
    });
}

startServer();
\`\`\`

## GraphQL Queries

### Basic Queries
\`\`\`graphql
# Get all users
query GetUsers {
    users {
        id
        name
        email
    }
}

# Get specific user with posts
query GetUser($id: ID!) {
    user(id: $id) {
        id
        name
        email
        posts {
            id
            title
            content
        }
    }
}

# Get posts with authors
query GetPosts {
    posts {
        id
        title
        content
        author {
            id
            name
        }
    }
}
\`\`\`

### Mutations
\`\`\`graphql
# Create user
mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
        id
        name
        email
    }
}

# Create post
mutation CreatePost($title: String!, $content: String!, $authorId: ID!) {
    createPost(title: $title, content: $content, authorId: $authorId) {
        id
        title
        content
        author {
            name
        }
    }
}

# Update user
mutation UpdateUser($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
        id
        name
        email
    }
}
\`\`\`

## Client-Side Integration

### Using Apollo Client
\`\`\`javascript
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

// Query component
const GET_USERS = gql\`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
\`;

function UsersList() {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data.users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
}

// Mutation component
const CREATE_USER = gql\`
    mutation CreateUser($name: String!, $email: String!) {
        createUser(name: $name, email: $email) {
            id
            name
            email
        }
    }
\`;

function CreateUserForm() {
    const [createUser, { loading, error }] = useMutation(CREATE_USER);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        createUser({
            variables: {
                name: formData.get('name'),
                email: formData.get('email')
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create User'}
            </button>
            {error && <p>Error: {error.message}</p>}
        </form>
    );
}
\`\`\`
      `
    }
  },
  ai: {
    openai: {
      title: "OpenAI Integration",
      content: `
# OpenAI Integration

Learn how to integrate OpenAI's powerful AI models into your applications.

## Setup

### Installation
\`\`\`bash
npm install openai
\`\`\`

### Environment Variables
\`\`\`bash
OPENAI_API_KEY=your_api_key_here
\`\`\`

### Basic Configuration
\`\`\`javascript
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
\`\`\`

## Chat Completions (GPT)

### Basic Chat Completion
\`\`\`javascript
async function generateChatResponse(userMessage) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            max_tokens: 150,
            temperature: 0.7
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage
const response = await generateChatResponse("Explain quantum computing in simple terms");
console.log(response);
\`\`\`

### Conversation with Memory
\`\`\`javascript
class ChatBot {
    constructor() {
        this.messages = [
            {
                role: "system",
                content: "You are a helpful programming assistant."
            }
        ];
    }

    async chat(userMessage) {
        // Add user message to conversation
        this.messages.push({
            role: "user",
            content: userMessage
        });

        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: this.messages,
                max_tokens: 200,
                temperature: 0.7
            });

            const assistantMessage = completion.choices[0].message.content;

            // Add assistant response to conversation
            this.messages.push({
                role: "assistant",
                content: assistantMessage
            });

            return assistantMessage;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    clearHistory() {
        this.messages = [this.messages[0]]; // Keep system message
    }
}

// Usage
const bot = new ChatBot();
console.log(await bot.chat("What is React?"));
console.log(await bot.chat("How do I create a component?"));
\`\`\`

## Image Generation (DALL-E)

\`\`\`javascript
async function generateImage(prompt, size = "1024x1024") {
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: size,
            quality: "standard"
        });

        return response.data[0].url;
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}

// Usage
const imageUrl = await generateImage("A futuristic cityscape at sunset");
console.log('Generated image URL:', imageUrl);
\`\`\`

## Text Embeddings

\`\`\`javascript
async function getEmbedding(text) {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: text
        });

        return response.data[0].embedding;
    } catch (error) {
        console.error('Error getting embedding:', error);
        throw error;
    }
}

// Calculate similarity between texts
function cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

// Usage
const embedding1 = await getEmbedding("I love programming");
const embedding2 = await getEmbedding("I enjoy coding");
const similarity = cosineSimilarity(embedding1, embedding2);
console.log('Similarity:', similarity);
\`\`\`

## Express.js API Example

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationId } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: message }
            ],
            max_tokens: 150
        });

        const response = completion.choices[0].message.content;

        res.json({
            success: true,
            response: response,
            usage: completion.usage
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Image generation endpoint
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt, size } = req.body;

        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: size || "1024x1024"
        });

        res.json({
            success: true,
            imageUrl: image.data[0].url
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
\`\`\`

## Error Handling

\`\`\`javascript
async function safeOpenAICall(apiCall) {
    try {
        return await apiCall();
    } catch (error) {
        if (error.response) {
            // API error
            console.error('OpenAI API Error:', error.response.status, error.response.data);

            if (error.response.status === 429) {
                throw new Error('Rate limit exceeded. Please try again later.');
            } else if (error.response.status === 401) {
                throw new Error('Invalid API key.');
            } else {
                throw new Error('API request failed.');
            }
        } else {
            // Network or other error
            console.error('Network Error:', error.message);
            throw new Error('Failed to connect to OpenAI.');
        }
    }
}

// Usage with error handling
try {
    const response = await safeOpenAICall(() =>
        openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello!" }]
        })
    );
    console.log(response.choices[0].message.content);
} catch (error) {
    console.error('Error:', error.message);
}
\`\`\`
      `
    },
    "machine-learning": {
      title: "Machine Learning Basics",
      content: `
# Machine Learning Basics

Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed.

## Types of Machine Learning

### 1. Supervised Learning
Learning with labeled data to make predictions.

**Examples:**
- Classification: Email spam detection
- Regression: House price prediction

### 2. Unsupervised Learning
Finding patterns in data without labels.

**Examples:**
- Clustering: Customer segmentation
- Dimensionality Reduction: Data compression

### 3. Reinforcement Learning
Learning through interaction with an environment.

**Examples:**
- Game playing: Chess, Go
- Robotics: Navigation, manipulation

## Getting Started with Python

### Installation
\`\`\`bash
pip install numpy pandas scikit-learn matplotlib seaborn
\`\`\`

### Basic Libraries
\`\`\`python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, accuracy_score
\`\`\`

## Linear Regression Example

\`\`\`python
# Sample data
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Generate sample data
np.random.seed(42)
X = np.random.randn(100, 1)
y = 2 * X.flatten() + 1 + np.random.randn(100) * 0.1

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse:.4f}')

# Visualize
plt.scatter(X_test, y_test, color='blue', label='Actual')
plt.plot(X_test, y_pred, color='red', label='Predicted')
plt.legend()
plt.show()
\`\`\`

## Classification Example

\`\`\`python
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train model
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Make predictions
y_pred = clf.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.4f}')

print('\\nClassification Report:')
print(classification_report(y_test, y_pred, target_names=iris.target_names))

print('\\nConfusion Matrix:')
print(confusion_matrix(y_test, y_pred))
\`\`\`

## Data Preprocessing

\`\`\`python
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.impute import SimpleImputer

# Load data
df = pd.read_csv('data.csv')

# Handle missing values
imputer = SimpleImputer(strategy='mean')
df['numeric_column'] = imputer.fit_transform(df[['numeric_column']])

# Encode categorical variables
label_encoder = LabelEncoder()
df['category_encoded'] = label_encoder.fit_transform(df['category'])

# Scale features
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[['feature1', 'feature2']])

# Feature selection
from sklearn.feature_selection import SelectKBest, f_classif

selector = SelectKBest(f_classif, k=5)
X_selected = selector.fit_transform(X, y)
\`\`\`

## Model Evaluation

\`\`\`python
from sklearn.model_selection import cross_val_score, GridSearchCV
from sklearn.metrics import precision_score, recall_score, f1_score

# Cross-validation
scores = cross_val_score(model, X, y, cv=5)
print(f'Cross-validation scores: {scores}')
print(f'Average CV score: {scores.mean():.4f} (+/- {scores.std() * 2:.4f})')

# Grid search for hyperparameter tuning
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20, 30]
}

grid_search = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)
grid_search.fit(X_train, y_train)

print(f'Best parameters: {grid_search.best_params_}')
print(f'Best cross-validation score: {grid_search.best_score_:.4f}')

# Detailed metrics for classification
y_pred = grid_search.predict(X_test)
print(f'Precision: {precision_score(y_test, y_pred, average="weighted"):.4f}')
print(f'Recall: {recall_score(y_test, y_pred, average="weighted"):.4f}')
print(f'F1-score: {f1_score(y_test, y_pred, average="weighted"):.4f}')
\`\`\`

## Clustering Example

\`\`\`python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data
X, _ = make_blobs(n_samples=300, centers=4, n_features=2, random_state=42, cluster_std=0.60)

# Apply K-means clustering
kmeans = KMeans(n_clusters=4, random_state=42)
y_kmeans = kmeans.fit_predict(X)

# Visualize results
plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=50, cmap='viridis')
centers = kmeans.cluster_centers_
plt.scatter(centers[:, 0], centers[:, 1], c='red', s=200, alpha=0.75, marker='x')
plt.title('K-means Clustering')
plt.show()
\`\`\`

## Neural Networks with TensorFlow/Keras

\`\`\`python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam

# Create neural network
model = Sequential([
    Dense(64, activation='relu', input_shape=(input_dim,)),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dropout(0.2),
    Dense(num_classes, activation='softmax')
])

# Compile model
model.compile(
    optimizer=Adam(learning_rate=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train model
history = model.fit(
    X_train, y_train,
    batch_size=32,
    epochs=100,
    validation_data=(X_val, y_val),
    verbose=1
)

# Evaluate model
test_loss, test_accuracy = model.evaluate(X_test, y_test, verbose=0)
print(f'Test accuracy: {test_accuracy:.4f}')

# Plot training history
plt.figure(figsize=(12, 4))
plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss')
plt.legend()
plt.show()
\`\`\`
      `
    }
  }
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("laravel");
  const [selectedTopic, setSelectedTopic] = useState<{category: string, topic: string} | null>({ category: "laravel", topic: "installation" });

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setSelectedTopic(null);
    } else {
      setExpandedCategory(categoryId);
      setSelectedTopic(null);
    }
  };

  const handleTopicClick = (categoryId: string, topicId: string) => {
    setSelectedTopic({ category: categoryId, topic: topicId });
  };

  const renderContent = () => {
    if (selectedTopic) {
      const content = topicContent[selectedTopic.category]?.[selectedTopic.topic];
      if (content) {
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{content.title}</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: content.content
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-md overflow-x-auto border"><code class="language-$1">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
                    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4 mt-8">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-2 mt-4">$1</h3>')
                    .replace(/^\n/gm, '<br>')
                }} 
              />
            </div>
          </div>
        );
      }
    }
    return children;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">devContent</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link 
                to="/" 
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === "/" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Home
              </Link>
              {/* <Link 
                to="/courses" 
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === "/courses" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Courses
              </Link> */}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
            <nav className="flex items-center">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 border-r bg-muted/30 min-h-[calc(100vh-3.5rem)] sticky top-14">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-6">Categories</h2>
            <nav className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;
                return (
                  <div key={category.id}>
                    <button
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </button>
                    
                    {isExpanded && (
                      <div className="ml-8 mt-2 space-y-1">
                        {category.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => handleTopicClick(category.id, topic.id)}
                            className={cn(
                              "w-full text-left p-2 rounded-md text-sm transition-colors hover:bg-accent",
                              selectedTopic?.category === category.id && selectedTopic?.topic === topic.id
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground"
                            )}
                          >
                            {topic.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold">devContent</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 devContent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
