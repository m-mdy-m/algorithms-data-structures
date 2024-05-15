## What is Sanity Testing

Sanity testing is a type of software testing aimed at quickly evaluating whether the basic functionality of a new software build is working correctly. It is usually performed on builds that are in the initial stages of development, before full regression testing is conducted. Sanity testing is limited in scope, focusing on critical functionality, and does not aim to uncover every possible error or bug in the system. It serves as a quick and lightweight method to ensure the software is functioning as expected before further testing is conducted.

Sanity testing is a subset of regression testing. It is performed to ensure that code changes are working properly. This testing acts as a checkpoint to determine whether testing for the build can proceed. The focus during the sanity testing process is to validate the core functionality of the application rather than conducting detailed testing. Sanity testing is generally performed on a build where immediate production deployment is required, such as for a critical bug fix.

## Functionality of Sanity Testing

1. **Verification of Integration**: Ensures that recent adjustments or bug fixes have not negatively impacted the integration of various modules or components.
2. **Verification of Fixed Bugs**: Confirms that bug fixes or modifications have resolved the reported issues and that associated features continue to function properly.
3. **Efficiency of Time and Resources**: Saves time and optimizes resources by quickly determining whether a build is stable enough for further testing.
4. **Check for Regression**: Includes a basic check for regressions to ensure that existing functionalities have not been adversely affected, even though it is not as thorough as full regression testing.
5. **Repetitive Procedure**: Conducted frequently to swiftly validate each incremental build, especially in agile and continuous integration setups.
## Attributes of Sanity Testing

To comprehend the foundation of sanity testing techniques, it is essential to understand their attributes and several other components. The following are some crucial aspects of sanity testing:

1. **Narrow and Deep**: Sanity testing is a narrow and deep method focusing on specific components to ensure their functionality is protected.
2. **Subset of Regression Testing**: It is a subset of regression testing that primarily focuses on less critical units of the application. It tests whether new features align with requirements.
3. **Unscripted**: Sanity testing is commonly unscripted, allowing testers to explore the application freely.
4. **Not Documented**: Sanity testing is typically not documented, emphasizing speed and flexibility.
5. **Performed by Testers**: Sanity testing is conducted by test engineers to quickly validate the stability and functionality of new builds.
## Sanity Testing Process:

1. **Identification**: This initial phase involves identifying newly added features and components, as well as code modifications made to address bugs.
2. **Evaluation**: After identification, the newly added features and components are examined to ensure they function as intended and meet specifications.
3. **Testing**: Upon successful completion of the identification and evaluation phases, testing begins. In this stage, each associated parameter, element, and critical component is examined and adjusted to ensure optimal functionality.

## Example of Sanity Testing: 
**Scenario:**

- A bug is identified in the login page. The password field allows entries less than four characters, violating the requirement of a minimum eight-character alphanumeric password.
- The testing team reports this defect to developers, and they fix it.
- The development team sends the revised build back for testing.

**Sanity Testing Process:**

1. **Identification:**
    - Testers analyze the release notes and confirm the password field fix.

2. **Evaluation:**
    - Testers review the password field requirements, ensuring the fix adheres to the minimum eight-character mandate.
    - Test cases are developed to specifically target the login page's password field functionality. These cases should verify:
        - Successful login with an eight-character password.
        - Error message displayed for passwords less than eight characters. 
        - Error message wording aligns with expectations (e.g., "Password must be at least 8 characters").

3. **Testing:**
    - The testers execute the developed test cases.
    - They record results (pass/fail) and observations for each test case, meticulously documenting any discrepancies.

4. **Regression Check:**
    - Since the login page was modified, sanity testing extends beyond just the password field fix. Testers verify other functionalities on the login page, such as:
        - Valid login with correct username and password.
        - Functionality of forgot password link.
        - Visual elements like login button and error messages render correctly.
    -  **Regression Prevention:**  The testers also consider the impact on related functionalities, such as password update in the user profile page. They create a test case to ensure the minimum character requirement is enforced there as well. This helps prevent regressions where a fix in one area unintentionally breaks functionality elsewhere.

5. **Go/No-Go Decision:**
    -  After comprehensive testing, the results are analyzed. A high pass rate for the test cases indicates the build is stable.
    - If the password field fix works as intended, with no regressions in login or user profile functionalities, the build can proceed to further testing.
    - Conversely, if critical issues are found, the build may be sent back to developers with detailed defect reports for further resolution.

**Benefits of this approach:**

- **Faster Feedback:** Sanity testing provides quick feedback on the stability of the build, allowing developers to address critical issues before extensive testing.
- **Reduced Regression Risk:** By checking related functionalities and user profile password update, sanity testing helps prevent regressions and ensures consistent behavior across the application.

## Features of Sanity Testing:
**1. Focused Approach:**

* **Subset of Regression Testing:** Unlike regression testing, which aims to comprehensively verify existing functionalities after a change, sanity testing focuses on a smaller, critical set of features. These features are essential for the core operation of the program and directly impacted by recent modifications.

**2. Lightweight and Agile:**

* **Unscripted and Ad-hoc:** Sanity testing often utilizes an unscripted approach. Testers leverage their expertise to conduct ad-hoc testing on specific functionalities. This allows for quicker execution and adaptation to the changes at hand.
* **Minimized Documentation:** Detailed test plans are not a primary concern in sanity testing. The emphasis lies on rapid, focused testing rather than extensive documentation.

**3. Deep Dive into Critical Areas:**

* **Narrow and Deep:** Sanity testing adopts a "narrow and deep" approach. Instead of aiming for broad coverage across the entire application, it delves deeply into a limited set of functionalities. This ensures a thorough examination of how recent changes have impacted these critical areas.

**4. Performed by Testers:**

* **Executed by Testers:** Sanity testing is typically performed by experienced testers who can leverage their knowledge to prioritize areas for testing based on the recent modifications. These testers focus on regions most likely to be affected by the changes, conducting quick checks to assess their stability.

**Additional Considerations:**

* **Automation Potential:** While primarily manual, core sanity tests can be automated for faster execution and improved consistency. 
* **Regression Prevention:** Sanity testing plays a crucial role in regression prevention by ensuring changes in one area don't unintentionally break functionalities elsewhere.

## Advantages
* **Early Detection of Critical Issues:** By focusing on core functionalities, sanity testing allows for the swift identification of major defects early in the development cycle. This enables developers to address these issues promptly, preventing costly rework and delays later on.
* **Quick Feedback and Go/No-Go Decisions:**  The rapid nature of sanity testing provides quick feedback on the overall stability of a build. This empowers teams to make informed decisions about whether to proceed with further testing or return the build to developers for rectification.
* **Cost-Effectiveness:**  Sanity testing is less time-consuming and resource-intensive compared to other testing methods. This translates to significant cost savings, especially during the initial stages of development.
* **Improved Development Efficiency:**  By identifying critical issues early, sanity testing allows developers to focus their efforts on fixing core functionalities before delving into more intricate testing phases. This streamlines the development process and improves overall efficiency.
* **Increased Confidence in Build Quality:**  Successful sanity testing instills confidence in the basic functionality of a build. This provides a solid foundation for subsequent testing phases, ensuring a higher quality software product.

## Disadvantages 

* **Limited Scope:**  The primary focus of sanity testing is on core functionalities. This inherently limits the scope of testing, potentially leaving other areas of the software untested. More comprehensive testing is still required to ensure complete software validation.
* **Incomplete Testing Picture:**  Sanity testing serves as a preliminary evaluation, providing a glimpse into the software's stability. It doesn't offer a complete picture of the software's performance or quality. Additional testing phases are crucial to thoroughly assess all aspects of the software.
* **Potential for False Positives:**  The rapid nature of sanity testing can sometimes lead to false positives. This occurs when a test indicates a feature is functioning correctly, even though it might have underlying issues. Careful analysis and follow-up testing are essential to avoid being misled by false positives.
* **Dependence on Tester Expertise:**  The effectiveness of sanity testing heavily relies on the expertise and knowledge of the testers. Testers need a deep understanding of the software's critical functionalities to design and execute effective test cases.
* **Unscripted Approach and Limited Future Reference:**  Sanity testing is often unscripted, which can limit its future reference value. While this promotes flexibility, it can make it challenging to replicate the testing process consistently across different builds.

## Difference between sanity testing and smoke testing
While both sanity and smoke testing play crucial roles in the software development lifecycle, they serve distinct purposes and have key differences. Here's a breakdown to help you understand them better:

**Scope:**

* **Sanity Testing:** Focused and narrow. It targets specific functionalities, often related to a recent code change or bug fix. Testers aim to verify if the intended changes work correctly and haven't caused unintended regressions (reappearance of old bugs) in those areas.
* **Smoke Testing:** Broader and more thorough. It concentrates on verifying the most critical functionalities of the entire application, ensuring they operate as expected. Smoke testing doesn't delve into specific changes, but rather checks if the core functionalities are stable enough for further testing.

**Depth:**

* **Sanity Testing:** Superficial and quick. It's a lightweight process designed to identify major issues introduced by recent modifications. Testers typically don't delve deep into functionalities, focusing on core aspects to ensure they haven't broken.
* **Smoke Testing:** More in-depth. Smoke testing aims to uncover significant defects that could prevent further testing. It involves testing critical functionalities more thoroughly to ensure core stability.

**Purpose:**

* **Sanity Testing:** Confirms that recent changes haven't caused unintended consequences. It helps identify regressions in areas impacted by modifications and ensures the build is stable enough for further testing.
* **Smoke Testing:** Determines overall application stability and readiness for further testing. It verifies if the critical functionalities are operational, providing a go/no-go decision for proceeding with more comprehensive testing.

**Execution Timing:**

* **Sanity Testing:** Typically performed after a code change or bug fix is implemented. It acts as a gatekeeper for further testing on a specific build.
* **Smoke Testing:** Often conducted early in the testing cycle, on initial builds or after major code integrations. It serves as a preliminary check before investing time in more rigorous testing.

**Analogy:**

Imagine a newly built car. Smoke testing is like checking if the engine starts, lights turn on, and brakes work – essential functionalities for basic operation. Sanity testing, on the other hand, is like verifying if a specific repair (e.g., fixing a broken window) didn't affect other crucial systems like the steering or acceleration.

**In Summary:**

* **Sanity testing** is a focused check on specific functionalities, ensuring recent changes haven't caused regressions.
* **Smoke testing** is a broader check on core functionalities, determining overall application stability for further testing.

## How to do sanity testing right?
**1. Define a Clear Scope:**

* **Identify Targeted Areas:**  Clearly define the specific functionalities or features impacted by recent changes (code modifications, bug fixes). This ensures the testing effort is focused on areas most likely to be affected.
* **Prioritize Critical Functionalities:**  Prioritize testing of functionalities essential for core operation. This ensures critical issues are identified early, preventing wasted effort on further testing of a flawed build.
* **Consider User Impact:**  Think about how recent changes might impact user workflows. Include basic user journeys to validate expected behavior hasn't been disrupted.
* **Document the Scope:**  Document the defined scope, creating a checklist or short test plan to guide the testing process and ensure nothing crucial is missed.

**2. Leverage Automation (When Possible):**

* **Identify Repetitive Tests:**  Pinpoint tests that are frequently executed with minimal variations. These are prime candidates for automation using testing frameworks like Selenium or Cypress.
* **Benefits of Automation:**  Automation streamlines the testing process, reducing manual effort and execution time. It also allows for parallel testing, further enhancing efficiency.
* **Maintainable Automated Tests:**  Ensure automated tests are well-structured and easy to maintain. This minimizes the need for frequent updates as the application evolves.
* **Focus Remains on Critical Thinking:**  Automation should free up testers' time for more strategic tasks like analyzing results, identifying regressions, and designing exploratory tests.

**3. Analyze and Utilize Results:**

* **Evaluate Pass/Fail Rates:**  Carefully analyze the results, paying close attention to failed test cases. Identify patterns or trends that might indicate underlying issues.
* **Investigate Failures:**  Thoroughly investigate failed test cases. Reproduce the issue, document your findings, and report them to developers for resolution.
* **Regression Prevention:**  Use sanity test results to identify potential regressions in untested areas. This proactive approach helps prevent issues from resurfacing later in the testing lifecycle.
* **Go/No-Go Decision:**  Based on the overall results (pass/fail rates, identified issues), make an informed decision about proceeding with further testing. A high success rate indicates the build is likely stable for further evaluation.

**Remember:**

* **Sanity testing is complementary, not a replacement for other testing methods.**  It works best in conjunction with more comprehensive testing approaches like regression testing.
* **Effective communication is key.**  Maintain clear communication with developers regarding the scope of sanity testing and any identified issues.
