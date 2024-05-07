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

### By Automation Level:

* **Automated Testing:** Uses tools and scripts to automate repetitive tasks, saving time and effort.
* **Manual Testing:** Performed by humans, often for exploratory testing or tasks requiring human judgment.

### By Development Stage:

* **Unit Testing:** Focuses on individual software units (functions, modules) during development (usually by developers).
* **Integration Testing:** Tests how different software units interact with each other after development.
* **System Testing:** Evaluates the entire software system as a whole against requirements after development.
* **Regression Testing:** Ensures new changes haven't caused regressions in existing functionalities (after development).
* **Alpha Testing:** Early testing conducted by a limited group of in-house users (before public release).
* **Beta Testing:** Testing done by a wider group of external users before public release (before public release).
* **Acceptance Testing (including User acceptance Testing:(UAT)):** Performed by users or stakeholders to validate the software meets their needs (before or after public release).

### By Testing Method:

* **Static Testing (Code Review):** Analyzes the code itself without running the software, to identify potential issues (during development).
* **Dynamic Testing (Execution Testing):** Runs the software with various inputs to test its behavior (during or after development).
* **Passive Testing (Monitoring):** Monitors the software's performance and behavior in a production environment (after deployment).

### By Testing Style:

* **Exploratory Testing:**  A flexible, creative approach where testers actively explore the software to uncover unexpected issues (during or after development).
* **Preset Testing:**  Structured testing with pre-defined test cases and expected results (during development).

* **adaptive testing**

### By Testers' Knowledge of Internal System (Focus):

* **Black-Box Testing:** Testers treat the software as a black box, focusing on functionalities without knowledge of internal workings (during or after development).
* **White-Box Testing:** Testers have knowledge of the software's internal structure and code, allowing for more in-depth testing (during development).

### By Purpose:

* **Functional Testing:** Ensures the software performs its intended functions correctly according to requirements (during or after development).
* **Non-Functional Testing:** Evaluates aspects like performance, usability, security, and scalability (during or after development).

  * **Performance Testing:** Measures the software's speed, responsiveness, and stability under load.
  * **Usability Testing:** Evaluates how easy and user-friendly the software is.
  * **Accessibility Testing:** Ensures the software is usable by people with disabilities.
  * **Security Testing:** Identifies and mitigates vulnerabilities that could be exploited by attackers.
  * **A/B testing**

### Other Important Testing Techniques:

* **Installation Testing:** Verifies if the software can be installed correctly on different systems (during development).
* **Compatibility Testing:** Ensures the software functions properly across various devices, operating systems, and browsers (during or after development).
* **Smoke Testing:** Basic tests to ensure a new build is stable enough for further testing (during development).
* **Sanity Testing:** Quick tests to confirm major functionalities work after a change (during development).
* **Continuous Testing:** Integrates testing throughout the development lifecycle for faster feedback (throughout development).
* **Destructive Testing:** Pushes the software to its limits to identify breaking points (during development).

### Test Design Techniques:

* **Test Case Design:**  Creating a plan for how to test the software with specific scenarios and inputs (during development).
* **Mutation Testing:**  Deliberately introducing errors in the code to see if tests can detect them (during development).
* **Boundary Value Testing:**  Testing software with inputs at the edges of expected ranges (during development).

### Specialized Testing Techniques:

* **API Testing:** Focuses on validating Application Programming Interfaces (APIs) (during or after development).
* **Concurrent Testing:** Simulates real-world usage by running multiple user sessions simultaneously (during or after development).
* **Conformance Testing (or Type Testing):** Verifies adherence to industry standards (during development).
* **Output Comparison Testing:** Compares the software's actual output against expected results (during or after development).
* **Property Testing:** Leverages formal properties to define desired behavior and generate test cases (during development).
* **Metamorphic Testing:** Transforms inputs and verifies predictable output transformation (during development).
* **VCR Testing (Virtual Cassette Recorder Testing):** Records user interactions for replay in future tests (during or after development).
* **Stress Testing:** Puts the software under extreme load conditions (during or after development).

## Quality
### Software verification and validation
Software development relies heavily on verification and validation (V&V) to ensure the final product meets its intended purpose. While these terms are often used interchangeably, there's a crucial distinction between them:

* **Verification:** **Are we building the software right?** This focuses on internal consistency and adherence to established specifications. It asks if each development phase delivers outputs (artifacts) that faithfully translate the requirements laid out in the previous phase. Think of it as checking if you're following the recipe correctly while building a cake.

* **Validation:** **Have we built the right software?** This is about ensuring the final product fulfills the actual needs and expectations of stakeholders. It asks if the entire software, once built, solves the intended problems and satisfies the users. Here, you're checking if the final cake is tasty and meets everyone's preferences.

The confusion arises from how "requirements" and "specified requirements" are interpreted in different standards:

* **IEEE Standards:** 
    > [What is IEEE Standard](./What-is-IEEE-Standard.md)
    * **Validation** refers to checking if the final product meets the set of stakeholder needs documented in the Software Requirements Specification (SRS).
    * **Verification** focuses on whether each development phase output aligns with the specifications from the preceding phase.

* **ISO 9000:** 
    > [What Is ISO Standard](./What-is-ISO-Standard.md)
    * **Verification** ensures the development artifacts (specifications) themselves meet the requirements set forth in the previous phase. These "specified requirements" are essentially internal documents used during development.
    * **Validation** confirms if the final product adheres to the entire set of specifications created throughout the process.

Here's a table summarizing the key differences:

| Concept          | IEEE Standards                                 | ISO 9000                                       |
|------------------|-------------------------------------------------|--------------------------------------------------|
| Verified Against | Previous phase specifications                  | Current phase specifications                      |
| Validated Against | Stakeholder needs documented in SRS             | Entire set of development phase specifications     |
| Example           | Architectural Design aligns with SRS           | Design Specification aligns with SRS             |

**Resolving the Contradiction:**

When we use consistent terminology, the apparent contradiction disappears. Both the SRS and the final software need validation:

* **SRS Validation:**
    > [What is SRS Validation]()
    * Static validation involves consulting stakeholders to ensure the SRS accurately reflects their needs.
    * Dynamic validation can involve building prototypes or partial implementations to confirm the SRS on a practical level.

* **Software Validation:**
    * Dynamic validation with stakeholders involves executing the final software and getting their feedback on whether it meets their expectations.

**Why Separate Verification and Validation?**

While some might think SRS validation is the same as verification due to stakeholder input, it's useful to maintain the distinction. Verification typically involves a more formal and technical input document compared to the open-ended nature of stakeholder discussions.

### Software Quality Assurance: Building Quality In

Software development isn't just about writing code; it's about creating a product that functions flawlessly and meets user needs. This is where Software Quality Assurance (SQA) comes in. 

**SQA goes beyond simply testing the final product.** It encompasses a broader set of activities focused on preventing defects from ever entering the software in the first place. Here's a breakdown of SQA and its role in building high-quality software:

* **Focus on Process:** Unlike software testing, which primarily examines the finished software, SQA delves into the entire development process. SQA specialists act as auditors, meticulously examining each stage of development – requirements gathering, design, coding, etc. Their goal is to identify and address potential weaknesses in the process itself.
* **Defect Prevention:** By analyzing the development process, SQA specialists can pinpoint areas prone to errors and suggest improvements. This proactive approach aims to prevent defects from being introduced in the first place, leading to a more robust and reliable final product.
* **Acceptable Defect Rates:** Not all software is created equal. A flight control system for an airplane demands near-zero tolerance for defects, while a simple mobile game might be able to handle a few minor glitches. SQA helps define acceptable defect rates based on the software's criticality and intended use.
* **Complements Testing:** It's important to remember that SQA doesn't eliminate the need for software testing. While SQA focuses on prevention, testing remains crucial for identifying any defects that might have slipped through the cracks. The two activities work hand-in-hand to ensure the highest quality software is delivered.

**Key Differences between SQA and Testing:**

| Aspect                | Software Testing                                 | Software Quality Assurance (SQA)                 |
|------------------------|-------------------------------------------------|--------------------------------------------------|
| Focus                  | Finding defects in the finished software        | Preventing defects throughout development           |
| Activities              | Executing tests, analyzing results               | Examining development processes, suggesting improvements |
| Role in Development     | Reactive (identifies existing defects)           | Proactive (prevents defects from being introduced) |

**Benefits of SQA:**

* Reduced development costs: Fewer defects mean less time and resources spent on fixing issues later in the development cycle.
* Improved software quality: SQA leads to more reliable and robust software, enhancing user experience and satisfaction.
* Enhanced customer satisfaction: By delivering high-quality software, companies can build stronger customer relationships.

###  Gauging Software Quality
Just like a diamond's brilliance is judged on multiple cuts, software quality is assessed using a variety of measures. These measures encompass various aspects of the software, ensuring it functions flawlessly, meets user demands, and adheres to industry standards.

**Key Quality Measures:**

* **Correctness:** This is the foundation – does the software perform its intended tasks accurately? Are the outputs produced what they're supposed to be?
* **Completeness:** Does the software deliver all the promised features and functionalities outlined in the requirements? Are there any crucial gaps that hinder its intended use?
* **Security:**  Can the software safeguard sensitive data and user privacy? Is it resistant to unauthorized access, malicious attacks, and vulnerabilities?
* **ISO/IEC 9126 Quality Characteristics:** This international standard defines a comprehensive framework for software quality evaluation. It encompasses six key areas:

    * **Capability:** Does the software offer all the features and functionalities required for its intended purpose? 
    * **Reliability:** Can users consistently rely on the software to perform without failures or crashes?
    * **Efficiency:** Does the software utilize resources (memory, processing power) optimally for its tasks?
    * **Portability:** Can the software be easily adapted and run on different platforms or environments?
    * **Maintainability:** How easy is it to understand, modify, and fix issues within the software's codebase?
    * **Compatibility:** Does the software work seamlessly with other systems and tools it needs to interact with?
    * **Usability:**  Is the software user-friendly and intuitive? Can users easily navigate and perform tasks without excessive difficulty?

**Software Metrics: Quantifying Quality**

Beyond these qualitative measures, software development utilizes metrics to provide a more quantitative assessment. These metrics can include:

* **Number of defects:** How many bugs or errors are present in the software? Lower numbers indicate better quality.
* **Test coverage:** What percentage of the codebase is covered by automated tests? Higher coverage suggests a more thorough testing process.
* **Mean Time To Repair (MTTR):** How long does it typically take to fix a discovered defect? Lower MTTR indicates faster resolution times.
* **Code complexity:** How intricate and challenging is the codebase to understand and modify? Less complex code is generally easier to maintain.

**A Holistic Approach**

By employing a combination of quality measures and metrics, software development teams gain a well-rounded understanding of their software's strengths and weaknesses. This comprehensive approach allows them to identify areas for improvement, prioritize fixes, and ultimately deliver high-quality products that meet user expectations.
### Artifacts
The software testing process produces a variety of artifacts, documents that serve as vital evidence and roadmaps throughout the development cycle. The specific artifacts created depend on the chosen software development model, stakeholder needs, and the overall organizational structure. Here's a breakdown of some key testing artifacts:

* **Test Plan:** This is the blueprint for your testing endeavors. It outlines the overall approach, objectives, and scope of testing. Imagine it as a roadmap outlining what will be tested, how it will be tested, who will be involved, and what success looks like. The plan might encompass details like:
    * Testing types involved (acceptance testing, system testing, etc.)
    * Resources required (personnel, tools)
    * Processes and procedures to be followed
    * Contingency plans for unexpected situations

- simple explanation »

Imagine a detailed travel itinerary for a complex journey – that's essentially what a test plan is for the software testing expedition. It outlines the overall testing approach, defining the objectives, scope, and what will be tested. This roadmap ensures everyone involved understands the testing goals, the resources required (personnel, tools), the processes and procedures to be followed, and even contingency plans for unexpected situations. The test plan can be a single, comprehensive document encompassing all testing aspects, or it might be structured as a master plan providing an overview of multiple, more detailed plans for specific testing types (like acceptance testing or system testing). In some cases, the test plan might be part of a broader "test strategy" document that defines the overall testing philosophy for the entire project.

* **Traceability Matrix:** This powerful tool helps ensure nothing slips through the cracks. It's essentially a table that maps relationships between various project documents. Typically, it tracks how high-level requirements (think of them as broad goals) translate into detailed design specifications, test plans, and individual test cases. This traceability ensures that every requirement has corresponding tests to verify its implementation.

-simple explanation »

Imagine a meticulous detective board that tracks every clue – a traceability matrix functions similarly in the software testing world. This powerful tool helps ensure no requirement gets overlooked during testing. It's essentially a table that meticulously maps the relationships between various project documents. Typically, it tracks how high-level requirements (think of them as broad goals for the software) translate into detailed design specifications, test plans, and individual test cases. This traceability matrix ensures that every requirement has corresponding tests designed to verify its successful implementation in the final software.

* **Test Case:** This is the workhorse of testing. A test case defines a specific scenario to be tested. It typically includes:
    * A unique identifier for easy reference.
    * References to the requirements being tested.
    * Preconditions – the state the system needs to be in before running the test.
    * Steps to be followed during the test execution.
    * Input data to be used for the test.
    * Expected results – the desired outcome of the test.
    * The actual results obtained when the test is run.

Think of a test case as a detailed recipe for testing a particular aspect of the software. By following these recipes, testers can systematically verify if the software functions as intended.

* **Test Script:**  Imagine automation taking over the test execution! A test script is essentially a program or code that mimics user actions. It automates the steps defined in a test case, allowing for faster and more repetitive testing. Test cases serve as the foundation for creating test scripts using automation tools.

* **Test Suite:**  This is a collection of test cases grouped together to thoroughly test a particular feature, module, or the entire software system.  Think of it as a curated cookbook containing all the recipes needed to test a specific dish (software functionality).  A test suite might also include details like:
    * Instructions or goals for each group of test cases.
    * Information on the system configuration required for testing.
    * Preconditions or setup steps needed before running the suite.

* **Test Data:**  Testing doesn't happen in a vacuum.  Different sets of data are often used to test the same functionality.  Test data encompasses all the values and changeable environmental components needed for testing.  This data can be stored in separate files for easy access and reuse. Techniques even exist to automatically generate test data for various scenarios.

* **Test Harness:**  Imagine a testing environment all set up and ready to go.  A test harness refers to the combination of software, tools, sample data (input and output), and configurations needed to execute a test.  Having a well-defined test harness ensures consistency and reduces the time spent setting up the testing environment.

* **Test Run:**  This is the act of executing a collection of test cases or test suites.  The tester runs the tests, compares the actual results with the expected results, and documents any discrepancies. After a test run is complete, a report summarizing the execution and results might be generated.

* **Certifications:**  The world of software testing offers various certification programs to validate a tester's skills and knowledge. While some advocate for these certifications, others debate whether the field is fully ready for them. Regardless, continuous learning and skill development are crucial for any software tester.

## Controversy:

## Best Practices:

## References:

- [wikipedia](https://en.wikipedia.org/wiki/Software_testing#)
- [techtarget](https://www.techtarget.com/whatis/definition/software-testing)
- [ibm](https://www.ibm.com/topics/software-testing)
- [medium](https://medium.com/@mehmetbarannakipoglu/what-is-software-testing-d5fee1ed4870)
- [geeksforgeeks](https://www.geeksforgeeks.org/software-testing-techniques/)