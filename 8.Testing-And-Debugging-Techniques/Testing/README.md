# Testing Techniques and More
## What is software testing?

Software testing is all about ensuring a software program performs as intended. It's like a final exam for the software before it goes out into the real world. Here's a breakdown of the key points:

* **Uncovering Issues:** Testers act like detectives, searching for bugs, defects, or anything that might cause the software to malfunction. 
* **Matching Expectations:**  Imagine a blueprint for the software. Testers verify if the built software matches that blueprint and fulfills its designed purpose. 
* **Reducing Risks:** By finding problems beforehand, testing helps prevent the software from failing when it's actually being used.  
* **Different Testing Styles:** There are two main approaches to testing: 
    * **Simulating Usage:** Testers act like users, running the software through its paces to see if it behaves correctly in various scenarios. 
    * **Code Scrutiny:**  Without running the software, testers can examine the code itself to identify potential issues. 
* **Limitations of Testing:**  It's important to remember that testing can't catch everything. There's a chance some bugs might slip through, but thorough testing significantly reduces this risk. 
Software testing is often used to answer the question: Does the software do what it is supposed to do and what it needs to do?

> Summary : Software testing is a way to assess the quality of the software and reduce the risk of software failure in operation.
## Why important
Software testing is the culmination of application development through which software testers evaluate code by questioning it. This evaluation can be brief or proceed until all stakeholders are satisfied. Software testing identifies bugs and issues in the development process so they're fixed prior to product launch. This approach ensures that only quality products are distributed to consumers, which in turn elevates customer satisfaction and trust.

To understand the importance of software testing, consider the example of Starbucks. In 2015, the company lost millions of dollars in sales when its point-of-sale (POS) platform shut down due to a faulty system refresh caused by a software glitch. This could have been avoided if the POS software had been tested thoroughly. Nissan also suffered a similar fate in 2016 when it recalled more than 3 million cars due to a software issue in airbag sensor detectors.

The following are important reasons why software testing techniques should be incorporated into application development:

- **Identifies defects early.** Developing complex applications can leave room for errors. Software testing is imperative, as it identifies any issues and defects with the written code so they can be fixed before the software product is delivered.
- **Improves product quality.** When it comes to customer appeal, delivering a quality product is an important metric to consider. An exceptional product can only be delivered if it's tested effectively before launch. Software testing helps the product pass quality assurance (QA) and meet the criteria and specifications defined by the users.
- **Increases customer trust and satisfaction.** Testing a product throughout its development lifecycle builds customer trust and satisfaction, as it provides visibility into the product's strong and weak points. By the time customers receive the product, it has been tried and tested multiple times and delivers on quality.
- **Detects security vulnerabilities.** Insecure application code can leave vulnerabilities that attackers can exploit. Since most applications are online today, they can be a leading vector for cyber attacks and should be tested thoroughly during various stages of application development. For example, a web application published without proper software testing can easily fall victim to a cross-site scripting attack where the attackers try to inject malicious code into the user's web browser by gaining access through the vulnerable web application. The nontested application thus becomes the vehicle for delivering the malicious code, which could have been prevented with proper software testing.
- **Helps with scalability.** A type of nonfunctional software testing process, scalability testing is done to gauge how well an application scales with increasing workloads, such as user traffic, data volume and transaction counts. It can also identify the point where an application might stop functioning and the reasons behind it, which may include meeting or exceeding a certain threshold, such as the total number of concurrent app users.
- **Saves money.** Software development issues that go unnoticed due to a lack of software testing can haunt organizations later with a bigger price tag. After the application launches, it can be more difficult to trace and resolve the issues, as software patching is generally more expensive than testing during the development stages.

## Goals

Software testing is typically goal driven.

**1. Unmasking Bugs and Defects:**

* This is the classic goal of testing – identifying errors in the code that cause malfunctions. Testers act like code detectives, meticulously examining the software for bugs that might hinder performance or lead to unexpected behavior. Early detection is crucial, as fixing bugs during development is far easier and cheaper than patching them after launch.

**2. Ensuring Requirements are Met:**

* Software is built to fulfill specific needs outlined in requirements documents. Testing verifies if the software adheres to these requirements, both functional (what it does) and non-functional (how it does it). This includes aspects like usability, security, performance, scalability, and maintainability. Any gaps between the intended functionality and the actual behavior are flagged for rectification. 

**3. Achieving Code Coverage:**

* Testing every possible input combination is practically impossible for complex software. However, testers strive for the highest possible code coverage. This means ensuring different sections of the code are exercised during testing to maximize the chances of uncovering hidden errors. Techniques like code review and automated testing tools help achieve this goal.

**4. Building User Confidence:**

*  Imagine using a bridge that hasn't been thoroughly inspected. Software testing fosters trust between developers and users. By meticulously testing the software, developers demonstrate their commitment to quality and user safety. This transparency gives users confidence that the product they're using is reliable and secure.

**5. Optimizing Performance and Scalability:**

* A well-tested program should run smoothly and efficiently. Performance testing measures factors like speed, responsiveness, and resource usage under various loads. Scalability testing ensures the software can handle increased user traffic or data volume without buckling under pressure. By simulating real-world usage scenarios, testers identify bottlenecks and areas for improvement, ensuring the software grows seamlessly alongside its user base.

**6. Fortifying Security:**

*  In today's digital landscape, cybersecurity threats are a constant concern. Software testing plays a vital role in plugging security holes. Testers act like ethical hackers, probing for vulnerabilities that malicious actors might exploit. Identifying and patching these security gaps creates a more robust defense system, safeguarding sensitive user data and preventing potential breaches.

**7.  Compatibility Across Platforms:**

* In today's diverse technological landscape, software should ideally function seamlessly across different operating systems, devices, and browsers. Compatibility testing ensures the software can adapt to various environments without compromising functionality. This becomes especially important for web applications and mobile programs that need to function flawlessly on a wide range of user devices. 

**8.  Enhancing Usability and User Experience:**

* Software should not only be functional but also user-friendly. Usability testing focuses on how users interact with the software, evaluating factors like intuitiveness, learnability, and overall user satisfaction. By identifying usability issues early on, testers can ensure the software is designed with the user in mind, resulting in a more enjoyable and productive user experience.

## Categorization
* **Development Testing:** This isn't a single, specific category, but rather an umbrella term encompassing all testing activities performed during the software development lifecycle. It includes unit testing, integration testing, system testing, regression testing, and smoke testing, among others. These tests are typically conducted by developers or QA testers before the software is released to the public.

### By Automation Level:**

* **Automated Testing:** Uses tools and scripts to automate repetitive tasks, saving time and effort.
* **Manual Testing:** Performed by humans, often for exploratory testing or tasks requiring human judgment.

### By Development Stage:**

* **Unit Testing:** Focuses on individual software units (functions, modules) during development (usually by developers).
* **Integration Testing:** Tests how different software units interact with each other after development.
* **System Testing:** Evaluates the entire software system as a whole against requirements after development.
* **Regression Testing:** Ensures new changes haven't caused regressions in existing functionalities (after development).
* **Alpha Testing:** Early testing conducted by a limited group of in-house users (before public release).
* **Beta Testing:** Testing done by a wider group of external users before public release (before public release).
* **Acceptance Testing (including User acceptance Testing:(UAT)):** Performed by users or stakeholders to validate the software meets their needs (before or after public release).

### By Testing Method:**

* **Static Testing (Code Review):** Analyzes the code itself without running the software, to identify potential issues (during development).
* **Dynamic Testing (Execution Testing):** Runs the software with various inputs to test its behavior (during or after development).
* **Passive Testing (Monitoring):** Monitors the software's performance and behavior in a production environment (after deployment).

### By Testing Style:**

* **Exploratory Testing:**  A flexible, creative approach where testers actively explore the software to uncover unexpected issues (during or after development).
* **Preset Testing:**  Structured testing with pre-defined test cases and expected results (during development).

* **adaptive testing**

### By Testers' Knowledge of Internal System (Focus):**

* **Black-Box Testing:** Testers treat the software as a black box, focusing on functionalities without knowledge of internal workings (during or after development).
* **White-Box Testing:** Testers have knowledge of the software's internal structure and code, allowing for more in-depth testing (during development).

### By Purpose:**

* **Functional Testing:** Ensures the software performs its intended functions correctly according to requirements (during or after development).
* **Non-Functional Testing:** Evaluates aspects like performance, usability, security, and scalability (during or after development).

  * **Performance Testing:** Measures the software's speed, responsiveness, and stability under load.
  * **Usability Testing:** Evaluates how easy and user-friendly the software is.
  * **Accessibility Testing:** Ensures the software is usable by people with disabilities.
  * **Security Testing:** Identifies and mitigates vulnerabilities that could be exploited by attackers.
  * **A/B testing**

### Other Important Testing Techniques:**

* **Installation Testing:** Verifies if the software can be installed correctly on different systems (during development).
* **Compatibility Testing:** Ensures the software functions properly across various devices, operating systems, and browsers (during or after development).
* **Smoke Testing:** Basic tests to ensure a new build is stable enough for further testing (during development).
* **Sanity Testing:** Quick tests to confirm major functionalities work after a change (during development).
* **Continuous Testing:** Integrates testing throughout the development lifecycle for faster feedback (throughout development).
* **Destructive Testing:** Pushes the software to its limits to identify breaking points (during development).

### Test Design Techniques:**

* **Test Case Design:**  Creating a plan for how to test the software with specific scenarios and inputs (during development).
* **Mutation Testing:**  Deliberately introducing errors in the code to see if tests can detect them (during development).
* **Boundary Value Testing:**  Testing software with inputs at the edges of expected ranges (during development).

### *Specialized Testing Techniques:**

* **API Testing:** Focuses on validating Application Programming Interfaces (APIs) (during or after development).
* **Concurrent Testing:** Simulates real-world usage by running multiple user sessions simultaneously (during or after development).
* **Conformance Testing (or Type Testing):** Verifies adherence to industry standards (during development).
* **Output Comparison Testing:** Compares the software's actual output against expected results (during or after development).
* **Property Testing:** Leverages formal properties to define desired behavior and generate test cases (during development).
* **Metamorphic Testing:** Transforms inputs and verifies predictable output transformation (during development).
* **VCR Testing (Virtual Cassette Recorder Testing):** Records user interactions for replay in future tests (during or after development).
* **Stress Testing:** Puts the software under extreme load conditions (during or after development).

## Quality

## Best Practices

## References

- [wikipedia](https://en.wikipedia.org/wiki/Software_testing#)
- [techtarget](https://www.techtarget.com/whatis/definition/software-testing)
- [ibm](https://www.ibm.com/topics/software-testing)
- [medium](https://medium.com/@mehmetbarannakipoglu/what-is-software-testing-d5fee1ed4870)
- [geeksforgeeks](https://www.geeksforgeeks.org/software-testing-techniques/)