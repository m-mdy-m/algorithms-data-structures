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