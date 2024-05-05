# Testing Techniques and More
## What is software testing?

Software testing is the act of checking whether software satisfies expectations.

Software testing can provide objective, independent information about the quality of software and the risk of its failure to a user or sponsor.

Software testing can determine the correctness of software for specific scenarios, but cannot determine correctness for all scenarios. It cannot find all bugs.

Based on criteria for measuring correctness from an oracle, software testing employs principles and mechanisms that might recognize a problem. Examples of oracles include: specifications, contracts, comparable products, past versions of the same product, inferences about intended or expected purpose, user or customer expectations, relevant standards, applicable laws.

Software testing is often dynamic in nature; running the software to verify actual output matches expected. It can also be static in nature; 

Software testing is often used to answer the question: Does the software do what it is supposed to do and what it needs to do?

> Summary : Software testing is the process of assessing the functionality of a software program. The process checks for errors and gaps and whether the outcome of the application matches desired expectations before the software is installed and goes live
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

## Types of software testing


## Categorization


* **Test Case Design:** Crafting a variety of inputs to comprehensively test your program's behavior.
* **Unit Testing:** Verifying the correctness of individual code units in isolation.
* **Integration Testing:** Ensuring different units work cohesively after being integrated.
* **System Testing:** Evaluating the entire system's functionality and user experience.
* **Acceptance Testing:** Confirming the system meets stakeholder or client requirements.
* **Performance Testing:** Assessing how the system performs under load (e.g., high user traffic).
* **Security Testing:** Identifying and mitigating security vulnerabilities.
* **Usability Testing:** Evaluating how easy and intuitive the system is to use for the target audience.
* **Mutation Testing:** Deliberately introducing errors into the code and checking if the tests detect them.
* **Non-Functional Testing:** This category encompasses testing aspects beyond the core functionality, such as performance, usability, security (which you already have), and reliability.
* **API Testing:** If your application interacts with APIs (external or internal), there are specific techniques to ensure they function as expected.
* **GUI Testing (Graphical User Interface Testing):** This focuses on testing the visual elements and user interactions of a graphical application.
* **Smoke Testing:** A high-level test to validate basic functionality after a new build or major code change.
* **Regression Testing:** Re-running previously successful tests on modified code to ensure no regressions (unintended functionality breaks).
* **Exploratory Testing:** A more creative approach where the tester actively explores the application to find bugs.

## Quality

## Best Practices

## References

- [wikipedia](https://en.wikipedia.org/wiki/Software_testing#)
- [techtarget](https://www.techtarget.com/whatis/definition/software-testing)
- [ibm](https://www.ibm.com/topics/software-testing)
- [medium](https://medium.com/@mehmetbarannakipoglu/what-is-software-testing-d5fee1ed4870)
- [geeksforgeeks](https://www.geeksforgeeks.org/software-testing-techniques/)