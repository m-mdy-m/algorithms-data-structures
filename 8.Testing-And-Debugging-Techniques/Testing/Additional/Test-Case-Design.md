# Test Case Design :
Test cases are designed to verify that your application is operating as expected. Test case writers design test cases so testers can determine whether an app or software system's feature is working correctly. Applications must be tested thoroughly to find out how the system behaves under all possible input conditions. A clear understanding of software functions and the testing process can make writing tests that identify defects easier. You can use the following walkthrough to learn more about writing and formatting different types of test cases.

## What is a QA test case?
Test cases are instructions for testers to follow to ensure programs are functioning properly. They describe how the software should work in normal, abnormal, or error operating conditions. Test case writing converts user requirements into a set of test conditions and descriptions that indicate how a system is functioning. In an automated test script, more than one test case can combine to form a test suite.

If you're practicing your test case writing skills to advance your career, you might consider earning a credential to demonstrate your efforts. For example, you can earn a certificate in Software Testing and Validation from the University of Leeds in just five hours. Or, put some practical experience on your resume by creating your first test automation script using Selenium and Java. You'll be guided through the process and complete a project for your portfolio in just two hours with the following Guided Project:


## Test case vs. test scenario 
When writing a test case, you typically think about every detail of "how" something should behave. For example, if you’re developing a login system, a test case might be that an error is displayed if you enter an incorrect email address. Then you may have tests for:

Not entering any email address

Adding a space at the end of an email address

Use all caps for the email address

Capitalizing the first letter of the email address

Test scenarios, also called test conditions or test possibilities, represent typical tasks users might want to accomplish with the software. A simple test scenario may require multiple test cases to cover the different outcomes. In our login system, some scenarios could be "I can successfully log in" or "I can't log in without entering my email address correctly."

## Types of test cases 
Test cases can be categorized based on the purpose they serve in testing. As a quality assurance professional, knowing the difference between them helps focus your efforts and choose the right test format. 

Functionality test cases: These are the most basic and obvious test cases to write. They ensure that each feature of your system works correctly. 

Performance test case: This test ensures that the system runs fast enough. It makes sure that all system requirements work as expected regarding speed, scalability, or stability.  

Unit test cases: Software developers usually write unit tests for their code to check individual units, for example, modules, procedures, or functions, to determine if they work as expected. 

User interface (UI) test cases: It’s important to remember that the user interface is part of the overall system and not just a shell where functionality appears. UI test cases check that each UI element works correctly, displays, and is easy to use. 

Security test cases: Security test cases help ensure that a product or system functions properly under all conditions, including when malicious users attempt to gain unauthorized access or damage the system. These test cases safeguard the security, privacy, and confidentiality of data.

Integration test cases: These ensure that the application components work together as expected. These test cases check whether modules or components integrate seamlessly to form a complete product.

Database test cases: These test cases ensure that the database meets its functional and non-functional requirements. They make sure database management systems (DBMS) support all business requirements.

Usability test cases: Usability test cases help check if users can use the application successfully. These determine whether users can easily use the system without difficulty or confusion. They also verify if users can navigate the system using common procedures and functions.

User acceptance test cases: User acceptance test cases verify that an application satisfies its business requirements before users accept it. These determine whether users accept or reject the output produced by a particular system before release to the live environment.

Regression testing: Regression test cases verify that changes made during development don’t cause any existing functionality to stop working. Regression testing happens after changes have been made to existing code to test that all existing or legacy functionality continues to work as expected after making the changes.

## Who writes test cases? 
Writing test cases is normally the responsibility of someone on the software development team, testing team, or quality assurance team. It’s typically preferred that a professional who was not involved with writing the code should write the test cases since they have a fresh perspective. Different software development frameworks like Agile and Scrum may vary in their QA testing approaches.

## How to write test cases: A step-by-step guide
Test cases are the blueprints that testers will follow, so they must be clear, thorough, and accurate. Below, we've outlined 10 steps you can take whether you're writing new test cases or revisiting and evaluating existing test cases.

Define the area you want to cover from the test scenario.

Ensure the test case is easy for testers to understand and execute.

Understand and apply relevant test designs.

Use a unique test case ID.

Use the requirements traceability matrix in testing for visibility.

Include a clear description in each test.

Add proper preconditions and postconditions.

Specify the exact expected result. 

Utilize suitable testing techniques. 

Get your test plan peer-reviewed before moving forward.
## Benefits of writing high-quality test cases
Writing test cases allows you think through every aspect of your software and makes it easier to identify any software gaps as it develops. Several of benefits emerge when you write formal test cases.

Documentation means you can guarantee the coverage of your tests.

You can reduce software maintenance and bug fixes and support future costs. 

Test cases can be used again in current and future projects.

You can improve the quality of the software and the user experience.

A higher quality product means more satisfied customers and higher profits.

## Test Case Management Tools
Test management tools help to manage the test cases. These tools are automated tools that decrease the time and effort of a tester as compared to the traditional way. Some test case management tools include advanced dashboards, easier bug, and progress tracking as well as management, custom test case templates, integration of test cases, inviting guest testers, managing team requirements and plans, and much more.

Below are some of the test case management tools:

Testpad: Testpad is a simple tool that makes test case management easier. The software’s main motto says that it aims to find a bug that matters. A few features of Testpad include manual testing, reports of the test cases and software, dragging and dropping to make testing easier, inviting guest testers by email, building custom templates, and much more. 
TestCaseLab: TestCaseLab is easily manageable for the test cases and could swiftly integrate them with bug trackers. The features of TestCaseLab include Custom test cases, Test Runs, Integrations of test cases, Test Plans, tags and priority for test cases, search by name of test cases, description, tags, etc. 
TestRail: TestRail is another platform that aims to make test case management easier, it streamlines the software testing processes and along with more visibility into QA. The basic features of TestRail include management for test cases, plans, and runs, more test coverage, real-time insights into the QA progress, etc. 
TestLodge: TestLodge is a test case management tool that helps the entire team manage their requirements, test plans, test cases, and test runs all in one single place and with no user limit. The basic features of TestLodge include Test Plans, Test Runs, a Dashboard, a Test Suite, and many more.
Formal and Informal Test Case
Formal Test Cases: Formal test cases are test cases that follow the basic test case format. It contains the test case parameters such as conditions, ID, Module name, etc. Formal Test cases have set input data and expected results, they are performed as per the given order of steps. 
Informal Test Cases: Informal test cases are test cases that don’t follow the basic test case format. In these, as the tests are performed the test cases are written in real-time then pre-writing them, and the input and expected results are not predefined as well.
## Test Case vs Test Scenario
Below are some of the points of difference between a test case and a test scenario:

Parameter	Test Case	Test Scenario
Definition	A test case is a defined format for software testing required to check if a particular application/software/module is working or not. Here we check for different conditions regarding the same. 	The test Scenario provides a small description of what needs to be performed based on the use case.                                                                                                      
Level of detailing	Test cases are more detailed with several parameters. 	Test Scenario provides a small description, mostly one-line statements.  
Action Level	Test cases are low-level actions. 	Test scenarios are high-level actions. 
Derived from	Test cases are mostly derived from test scenarios.	Test scenarios are derived from documents like BRS, SRS, etc.
Objective	It focuses on “What to test” and “How to test”.	It focuses more on ‘What to test”.
Resources required	Test cases require more resources for documentation and execution.	Fewer resources are required to write test scenarios.
Inputs	It includes all positive and negative inputs, expected results, navigation steps, etc.	They are one-liner statements.
Time requirement	It requires more time compared to test scenarios.	Test scenarios require less time.
Maintenance	They are hard to maintain.	They require less time to maintain.

## Test Case Template
Let’s look at a basic test case template for the login functionality. 

The Test case template contains the header section which has a set of parameters that provide information about the test case such as the tester’s name, test case description, Prerequisite, etc. 
The body section contains the actual test case content, such as test ID, test steps, test input, expected result, etc. 
Below is the table that shows the basic template of a test case:

Fields	Description
Test Case ID	Each test case should have a unique ID.
Test Case Description	Each test case should have a proper description to let testers know what the test case is about.
Pre-Conditions	Conditions that are required to be satisfied before executing the test case.
Test Steps	Mention all test steps in detail and to be executed from the end-user’s perspective.
Test Data	Test data could be used as input for the test cases.
Expected Result	The result is expected after executing the test cases.
Post Condition	Conditions need to be fulfilled when the test cases are successfully executed.
Actual Result	The result that which system shows once the test case is executed.
Status	Set the status as Pass or Fail on the expected result against the actual result.
Project Name	Name of the project to which the test case belongs.
Module Name	Name of the module to which the test case belongs.
Reference Document	Mention the path of the reference document.
Created By	Name of the tester who created the test cases.
Date of Creation	Date of creation of test cases.
Reviewed By	Name of the tester who reviews the test case.
Date of Review	When the test cases were reviewed.
Executed By	Name of the tester who executed the test case.
Date of Execution	Date when the test cases were executed.
Comments 	Include comments which help the team to understand the test cases. 
In the given template below it’s identifiable that the section from module name to test scenario is the header section while the table that lies below the test scenario (from test case ID to comments) is the body of the test case template. 

## The Different Types of Test Case Design Techniques
Test case design techniques allow QA engineers to design better test cases, reduce the number of test cases to be executed, and increase testing coverage.

Specific-Based Techniques (Black Box Techniques)
These are designed based on the external features of the software, such as the requirement specification or technical design. Following is the categorization of the specific-based technique:

Boundary value analysis (BVA)
It helps to identify errors at the boundaries of the defined input values. It bases itself on the principle that if the system works well for particular values, it will work well for all values between the two boundary values.

Equivalence partitioning (EP)
In this technique, the input data partitions into several classes with equal data, and the test cases are made for each class.

Decision table testing
Also called the cause-and-effect table, in this technique, the QA engineer has to create a table of all kinds of inputs and corresponding outputs to ensure that the different functions respond to the combination of inputs and events.

State transition diagrams
In essence, this testing allows the QA engineers to test the behavior of an application under test (AUT). The engineer uses various input conditions in a sequence to determine if it changes the state of the AUT. This test case is helpful for systems having a specific workflow. For example, this approach will prompt the user to re-enter the pin correctly if they enter it incorrectly the 1st or 2nd time. On 3rd attempt, the system could direct the user to the access granted or account blocked state depending upon whether they have entered the pin correctly or incorrectly.

Use case testing
In this type of testing, the engineer executes different types of business scenarios and end-user functionalities to find a test case that can cover the entire system.

Structure-Based Techniques (White Box Techniques)
These types of test cases concentrate on the internal structure of the software. The developers test every module and minute detail of the application code while designing the test case. Following is the categorization of the structure-based technique:

Statement coverage testing
In this technique, all the executable statements in the source code execute at once. This helps calculate the number of statements executed out of the total number of statements in the source code.

Decision testing coverage
In this technique, one of the branches from each decision point is executed at least once to determine if it leads to any unexpected behavior in the application.

Condition testing
Condition testing thoroughly tests all the conditions in the source code to ensure that they are error-free.

Multiple condition testing
In multiple condition testing, the different combinations of conditions are tested at once to ensure 100% test coverage.

All path testing
All path testing helps find out all the possible executable paths and faults in a particular code by using the source code.

Experience-Based Techniques
In essence, this technique is majorly based on the QA teams' experience. The testing outcome depends on the testers' skills, intuitions, and experience. Following is the categorization of the experienced-based technique:

Error guessing
In error guessing, the engineers predict the errors based on their experience, skills, intuition, and the available data set.

Exploratory testing
Exploratory testing proceeds without documentation, mainly because of the shortage of time. The test case design and execution occur simultaneously.

## How To Plan and Design Test Cases?
Prepare the Test Environment
To run the tests in an environment, the QA engineers must prepare the environment. This means they would require testing software like test data generators, debuggers, emulators and stimulators, and stubs and drivers. They would also require hardware to run the tests. The QA engineers must document the hardware specifications and the software versions regularly to ensure a record is available for future reuse.

Determine the Scope of the Test Case
Test case design begins with determining the scope. The stakeholders need to provide the requirements for testing. These requirements could be design specifications, use cases, the usability of the software, etc. The requirements are the source of truth, and they form the foundation for designing test cases.

Design the Test Case
Once the scope is defined, and the test environment prepared, the QA engineers determine the best testing strategy for the test cases. They start creating test cases for each software requirement to ensure that it meets all the specifications.

The test case must include both positive and negative sides, i.e., it must document the software's behavior in positive and negative situations to demonstrate that the software is thoroughly tested and performs the expected behavior. The test case document must be as detailed as possible. It could be in any format but must contain information such as:

Test case ID: It is a unique id for the test case that makes it distinguishable.
Test description: Describes the units, features, and functionalities being tested and verified.
Testing conditions: Describes the purpose and conditions under which the test was executed.
The assumptions and preconditions: Describe the conditions to meet before test execution.
Testing steps: Describe the engineer’s steps to execute the test.
The input test data: Describes the variables and values used for testing.
The expected results: Describes the results expected from testing.
The actual and postcondition results: Describes the output that was derived during testing. Postconditions explain what happens when the steps are executed.
Pass/Fail status: If the expected and actual results match, the engineer marks the status as ‘Pass.’ Otherwise, the engineer marks it as ‘Fail.’

## Best Practice for Writing Test Case
There are certain practices that one could follow while writing the test cases that would be considered beneficial. 

Simple and clear: Test cases need to be very concise, clear, and transparent. They should be easy and simple to understand not only for oneself but for others as well. 
Maintaining the client/customer/end-user requirements must be unique: While writing the test cases, it’s necessary to make sure that they aren’t being written over and over again and that each case is different from the others. 
Zero Assumptions: Test cases should not contain assumed data, and don’t come up with features/modules that don’t exist. 
Traceability: Test cases should be traceable for future reference, so while writing it’s important to keep that in mind, 
Different input data: While writing test cases, all types of data must be taken into consideration. 
Strong module name: The module name should be self-explanatory while writing the test case.  
Minimal Description: The description of a test case should be small, one or two lines are normally considered good practice, but it should give the basic overview properly. 
Maximum conditions: All kinds of conditions should be taken into consideration while writing a test, increasing the effectiveness. 
Meeting requirements: While writing the test case the client/customer/end-user requirements must be met.
Repetitive Results: The test case must be written in such a way that it should provide the same result. 
Different Techniques: Sometimes testing all conditions might not be possible but using different testing with different test cases could help to check every aspect of a software. 
Create test cases with the end user’s perspective: Create test cases by keeping end-user in mind and the test cases must meet customer requirements.
Use unique Test Case ID: It is considered a good practice to use a unique Test Case ID for the test cases following a naming convention for better understanding.
Add proper preconditions and postconditions: Preconditions and postconditions for the test cases must be mentioned properly and clearly.
Test cases should be reusable: There are times when the developer updates the code, then the testers need to update the test cases to meet the changing requirements.
Specify the exact expected outcome: Include the exact expected result, which tells us what will be result of a particular test step.