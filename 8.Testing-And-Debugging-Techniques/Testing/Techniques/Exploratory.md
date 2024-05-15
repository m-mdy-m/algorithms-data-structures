# What is Exploratory Testing

Exploratory Testing is a type of software testing where the tester has the freedom to select any methodology to test the software. It is an unscripted, dynamic approach to software testing that relies on the tester's knowledge, skills, and intuition. In exploratory testing, testers leverage their learning and experience to test the software in real-time, aiming to uncover both functional and technical faults. This testing method not only checks the functionality and operations of the software but also strives to optimize and improve it in every possible way.

Combining the tester's experience with a structured approach, exploratory testing is often performed as a black box testing technique. Originally referred to as “ad-hoc testing,” the term “exploratory testing” was coined by software testing expert Cem Kaner in his classic book, "Testing Computer Software."

Exploratory testing is particularly useful when pre-defined test cases are insufficient. Testers can continue testing by creating new test cases on the fly, relying on their instincts and expertise without spending excessive time on preparation or documentation. This approach allows for more flexibility and adaptability in uncovering software issues.

## Why use Exploratory Testing?
1. **Unstructured Testing Reveals Hidden Bugs**: The random and unstructured nature of exploratory testing can uncover bugs that may remain undetected during structured testing phases.

2. **Enhanced Interaction with User Stories**: Testers can interact with user stories by annotating defects, adding assertions, and using voice memos. This dynamic interaction helps convert user stories into comprehensive test cases.

3. **Facilitates Agile Workflow**: Exploratory testing supports agile methodologies by formalizing findings and documenting them automatically. Visual feedback allows the entire team to participate and adapt to changes quickly, enhancing the agile workflow.

4. **Reinforces Traditional Testing Processes**: Tools for automated test case documentation enable testers to convert exploratory testing sequences into functional test scripts, strengthening the traditional testing process.

5. **Speeds Up Documentation**: Exploratory testing accelerates the documentation process and creates an instant feedback loop, allowing for quicker identification and resolution of issues.

6. **Exports Documentation to Test Cases**: Integration with tools like Jira allows recorded documentation from exploratory testing to be directly exported to test cases, streamlining the testing workflow and ensuring thorough documentation.
## When should you use Exploratory Testing?

* **Rapid Learning and Feedback for New Testers:** When a new tester joins the team and needs to grasp the application's functionality swiftly, exploratory testing comes to the rescue. By actively exploring the software, they can gain a quick understanding while simultaneously identifying areas for improvement. This allows them to provide valuable feedback early in the development cycle.

* **User-Centric Review:**  Exploratory testing excels at evaluating software from a user's perspective. Testers can think like end-users, navigate the application intuitively, and identify potential usability roadblocks or inconsistencies in the user experience. This user-centric approach helps ensure the software is not just functional but also intuitive and user-friendly.

* **Early Iteration Cycles with Time Constraints:**  In agile development methodologies where early iterations are crucial, and time for crafting detailed test cases is limited, exploratory testing proves invaluable. Testers can start testing right away, leveraging their knowledge to explore core functionalities and identify critical bugs. This facilitates faster feedback loops and early defect detection.

* **Uncovering Edge Cases in Mission-Critical Applications:**  For mission-critical applications where even minor glitches can have severe consequences, exploratory testing acts as a safeguard. Testers can delve into the software, experiment with various inputs and scenarios, and uncover potential edge cases that scripted tests might miss. This proactive approach helps prevent critical quality failures.

* **Complementing Unit Testing:**  Exploratory testing doesn't exist in a silo. It can effectively complement unit testing by helping identify areas where unit tests might be lacking. As testers explore the application, they might encounter functionalities not covered by existing unit tests. These discoveries can be documented and converted into formal test cases for later, more comprehensive testing phases.  

In essence, exploratory testing is a valuable tool for situations that demand:

* **Rapid learning and feedback**
* **User-centric evaluation**
* **Fast testing cycles**
* **Comprehensive testing of mission-critical applications**
* **Identification of areas for unit test improvement**

## When to say no to exploratory testing:
* **Need for Initial Baseline and Repeatability:**  In the early stages of development, when a baseline understanding of the software's functionality is crucial, exploratory testing alone might be insufficient. Scripted testing with well-defined test cases helps establish a foundation for testing and ensures consistent results across test cycles. This initial structure becomes the springboard for further exploratory testing once a basic understanding is established.

* **Compliance Testing with Strict Regulations:**  In domains governed by strict regulations and compliance requirements, exploratory testing might not be enough. Compliance testing often demands adherence to specific checklists and mandatory procedures dictated by law. Scripted testing with clearly defined steps and expected outcomes becomes essential for ensuring adherence to these regulations and providing auditable results.

* **Regression Testing for Established Functionality:**  For established functionalities that have undergone extensive testing in previous iterations, exploratory testing might not be the most efficient approach. Scripted regression testing ensures these functionalities continue to work as expected with any code changes. However, exploratory testing can still be valuable in regression cycles to identify unintended side effects or regressions in user experience.

* **Limited Time for Core Functionality Testing:**  If time constraints are severe and the focus is solely on core functionalities, exploratory testing might not be the most time-effective option. Scripted testing with pre-defined test cases allows for a more targeted approach, ensuring critical functionalities are thoroughly tested within the allotted time frame. Exploratory testing can then be used later to delve deeper into specific areas.

**Finding the Right Balance:**

The key lies in striking a balance between exploratory and scripted testing. Exploratory testing is best used in conjunction with other testing techniques to maximize its benefits. By understanding when each approach is most effective, you can create a comprehensive testing strategy that ensures thorough coverage, efficient use of resources, and ultimately, a high-quality software product. 

## Importance of exploratory testing for CI/CD:
## Exploratory Testing: A Supercharger for CI/CD Pipelines

In the fast-paced world of CI/CD (Continuous Integration and Continuous Delivery), exploratory testing emerges as a powerful tool for enhancing software quality. Here's how exploratory testing injects value into the CI/CD pipeline:

**Benefits for a Collaborative CI/CD Environment:**

* **Open to All Stakeholders:** Exploratory testing isn't limited to trained testers. Developers, product managers, and even business analysts can participate in exploratory testing sessions. This fosters collaboration and leverages diverse perspectives to uncover hidden defects.

* **Rapid Feedback with Rich Documentation:** Unlike traditional testing methods, exploratory testing allows for capturing screenshots, recording voiceovers during sessions, and providing instant feedback. This rich documentation streamlines communication between testers and developers, leading to faster bug resolution.

**Enhancing the CI/CD Pipeline:**

* **Complements Existing Testing:**  Exploratory testing acts as a valuable complement to automated testing and other established testing techniques. It delves deeper, uncovering edge cases and scenarios that scripted tests might miss, resulting in more comprehensive test coverage.

* **Unveiling Hidden Defects:**  Exploratory testing sessions are essentially unscripted adventures into the software. This free-flowing approach helps identify critical issues that might get buried under pre-defined workflows, potentially saving millions of dollars in future bug fixes.

* **User-Centric Focus:**  Exploratory testing encourages testers to think like end-users. By actively navigating the software from a user's perspective, testers can identify usability issues and ensure the software is not just functional but also intuitive and user-friendly.

* **Fueling Innovation:**  The unstructured nature of exploratory testing fosters experimentation and creativity within teams. This can lead to the discovery of new features and functionalities that might not have been envisioned in the initial planning stages.

**The Synergy with CI/CD:**

The almost instantaneous feedback loop fostered by exploratory testing aligns perfectly with the core principles of CI/CD. Issues are identified and communicated rapidly, allowing developers to address them swiftly within the continuous integration process. This iterative approach leads to faster bug fixes, shorter release cycles, and ultimately, higher quality software delivered more frequently.

## Types of Exploratory Testing:
**1. Freestyle Exploratory Testing:**

* **Description:**  An ad-hoc approach with no predefined test cases or maximum coverage targets. Testers have the freedom to explore the application intuitively.
* **Use Cases:**
    * Initial familiarization with a new application.
    * Reviewing work done by other testers (exploratory ad-hoc review).
    * Quick smoke testing to identify critical issues before further testing.

**2. Strategy-Based Exploratory Testing:**

* **Description:** Leverages various testing techniques to guide exploration. These techniques include:
    * **Decision table testing:** Analyzes various input conditions and their expected outcomes.
    * **Cause-effect graphing:** Identifies relationships between causes (inputs) and effects (outputs).
    * **Boundary value analysis:** Tests functionality at the edges of expected input values.
    * **Equivalence partitioning:** Groups similar input values that are expected to have the same behavior.
    * **Error guessing:** Anticipates potential errors based on experience and knowledge.
* **Use Cases:**  Ideally suited for experienced testers who understand the application well and can leverage various strategies to maximize test coverage.

**3. Scenario-Based Exploratory Testing:**

* **Description:** Focuses on exploring the application based on predefined user scenarios. Scenarios can be:
    * **End-to-end flows:** Simulate real-world user journeys through the application.
    * **Specific test cases:** Address functionalities or features requiring in-depth exploration.
* **Source of Scenarios:**  Scenarios can be derived from user stories, business requirements, or created by the testing team based on their understanding of user needs.

**4. Collaborative Exploratory Testing:**

* **Description:** Involves multiple testers working together during exploration. They share observations, insights, and findings in real-time.
* **Benefits:**
    * Enhances test coverage by incorporating diverse perspectives.
    * Fosters brainstorming and idea generation, leading to the discovery of a wider range of defects.

**5. Charter-Based Exploratory Testing:**

* **Description:** Testers follow a pre-defined "charter" that outlines the goals and scope of the exploratory session. The charter may specify:
    * Specific features to be explored.
    * User personas or use cases to consider.
    * Goals to be achieved during the exploration. 
* **Benefits:**
    * Provides direction and focus to the exploratory effort.
    * Ensures alignment with overall testing objectives.

**6. Time-Boxed Exploratory Testing:**

* **Description:** Imposes a time limit on the exploratory session. Testers aim to find the most critical defects within the allotted timeframe.
* **Benefits:**
    * Promotes efficiency and prioritizes critical testing.
    * Useful for quick smoke tests or focused exploration of specific functionalities.

## Exploratory Testing Process:

**1. Entry Criteria and Preparation:**

* **Understanding the System:** Testers begin by familiarizing themselves with the application under test. This involves reviewing requirements, user stories, and any existing documentation.
* **Defining Goals and Scope:**  The testing session should have clear objectives, such as focusing on specific functionalities or identifying usability issues.
* **Session Timeboxing (Optional):**  For focused exploration, a time limit can be set to prioritize critical testing within the allotted timeframe.

**2. Test Charter (Optional):**

In some cases, a "charter" might be used to guide the exploration. This document outlines:

* Specific features or functionalities to explore.
* User personas or use cases to consider.
* Expected outcomes or areas of investigation.

**3. Learn, Explore, and Analyze (Core Loop):**

This is the heart of exploratory testing and is an iterative cycle:

   * **Learn:** Testers actively interact with the application, observing its behavior and identifying potential areas of interest. This may involve:
        * Trying out different functionalities.
        * Entering unexpected data.
        * Thinking from the user's perspective and exploring workflows.
   * **Explore:** Based on observations and learnings, testers delve deeper into specific areas. This might involve:
        * Utilizing various testing techniques like equivalence partitioning or boundary value analysis.
        * Following hunches or intuitions based on experience.
   * **Analyze:** Throughout the exploration, testers continuously analyze their findings. This includes:
        * Identifying potential defects or areas for improvement.
        * Documenting observations, steps to reproduce issues, and expected behavior.

**4. Reporting and Feedback:**

*  After the exploratory session, testers document their findings in a clear and concise report. This includes:
    * Identified defects with severity levels and steps to reproduce.
    * Usability issues or areas for improvement.
    * Overall observations and learnings from the exploration.
*  The report is then shared with developers and other stakeholders for review and action. 

**5. Continuous Improvement:**

*  Feedback from developers and stakeholders is incorporated to refine future exploratory testing sessions.
*  Exploratory testing is an ongoing process that can be integrated throughout the development lifecycle.

**Key Points:**

* Exploratory testing is a dynamic process, and the order of steps may not always be strictly linear. Testers may revisit previous stages as needed.
* The success of exploratory testing relies heavily on the tester's experience, knowledge, and ability to think critically and creatively.

## Best Practices for Exploratory Testing:
Understand the customer: For effective exploratory testing, it is important to understand the customer’s viewpoint and expectations properly. End users browse the same software in different ways based on age, gender preferences, and other factors. Testers must be able to approach the software from all those user perspectives.
The aim of testing should be clear: For effective exploratory testing, the testers need to have a clear mindset and have clarity on the mission of testing. Testers should maintain clear notes on what needs to be tested, and why it needs to be tested.
Proper documentation: It is important to make proper notes and take a document and monitor test coverage, risk, Tets execution log, issues, and queries.
Tracking of issues: The tester should maintain a proper record of questions and issues raised during testing.
## Challenges of Exploratory Testing:
Replication of failure: In exploratory testing replication of failure to identify the cause is difficult.
Difficult to determine the best test case: In exploratory testing, determining the best test case to execute or to determine the best tool to use can be challenging.
Difficult to document all events: During exploratory testing documentation of all events is difficult.
Difficult reporting: Reporting test results is difficult in exploratory testing as the report does not have well-planned test scripts to compare with the outcome.
## Advantages of Exploratory Testing:
Less preparation required: It takes no preparation as it is an unscripted testing technique.
Finds critical defects: Exploratory testing involves an investigation process that helps to find critical defects very quickly.
Improves productivity: In exploratory testing, testers use their knowledge, skills, and experience to test the software. It helps to expand the imagination of the testers by executing more test cases, thus enhancing the overall quality of the software.
Generation of new ideas: Exploratory testing encourages creativity and intuition thus the generation of new ideas during test execution. 
Catch defects missed in test cases: Exploratory testing helps to uncover bugs that are normally ignored by other testing techniques.
## Disadvantages of Exploratory Testing:
Tests cannot be reviewed in advance: In exploratory testing, Testing is performed randomly so once testing is performed it cannot be reviewed.
Dependent on the tester’s knowledge: In exploratory testing, the testing is dependent on the tester’s knowledge, experience, and skill. Thus, it is limited by the tester’s domain knowledge.
Difficult to keep track of tests: In Exploratory testing, as testing is done in an ad-hoc manner, keeping track of tests performed is difficult.
Not possible to repeat test methodology: Due to the ad-hoc nature of testing in exploratory testing, tests are done randomly and thus it is not suitable for longer execution time, and it is not possible to repeat the same test methodology.