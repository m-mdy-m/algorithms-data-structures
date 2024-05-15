## What is Sanity Testing
Sanity testing is a type of software testing that aims to quickly evaluate whether the basic functionality of a new software build is working correctly or not. It is usually performed on builds that are in the initial stages of development before the full regression testing is performed. Sanity testing is limited in scope and typically focuses on critical functionality and does not aim to uncover every possible error or bug in the system. It is a quick and lightweight way to ensure that the software is functioning as expected before further testing is conducted.
It is a subset of regression testing. Sanity testing is performed to ensure that the code changes that are made are working properly. Sanity testing is a stoppage to check whether testing for the build can proceed or not. The focus of the team during the sanity testing process is to validate the functionality of the application and not detailed testing. Sanity testing is generally performed on a build where the production deployment is required immediately like a critical bug fix. 

## Functionality of Sanity Testing:
Verification of Integration: To make sure that recent adjustments or bug fixes haven’t negatively impacted the integration of various modules or components, sanity testing may involve an integration check.
Verification of Fixed Bugs: Sanity testing follows bug fixes or modifications to make that associated features continue to function appropriately and that reported issues have been satisfactorily resolved.
Efficiency of Time and Resources: Sanity testing saves time and aids in resource optimization by rapidly determining whether a build is stable enough for further testing.
Check for Regression: Sanity testing may include a rudimentary check for regressions to make sure that current functionalities have not been adversely affected, even if it is not as thorough as regression testing.
Repetitive Procedure: It can be carried often frequently to swiftly validate each incremental build, particularly in agile and continuous integration setups.
## Attributes of Sanity Testing:
In order to comprehend the foundation of sanity testing techniques, we must acquire knowledge of their attributes along with several other components. Therefore, the following are some crucial aspects of sanity testing:

Narrow and deep: In the Software testing sanity testing is a narrow and deep method to protect the components.
A Subset of Regression Testing: Subset of regression testing mainly focus on the less important unit of the application. it’s used to test application new features with the requirement that is matched or not.
Unscripted: sanity testing commonly unscripted.
Not documented: sanity testing can’t be documented.
Performed by testers. sanity testing is done by the test engineers.
## Sanity Testing Process:

Identification: Identification is the initial phase in the sanity testing process, where we look for newly added features and components as well as code modifications made to address bugs.
Evaluation: After the identification phase, we will examine recently added features and components and make necessary modifications to ensure they function as intended and in accordance with the specifications.
Testing: Upon the successful completion of the identification and evaluation phases, we will proceed to the testing phase. In this stage, we examine and evaluate each of the associated parameters, elements, and critical components of the previously analyzed attributed and adjusted them to ensure optimal functionality.
If every step listed above is completed without a hitch, the build can move on to more in-depth and demanding testing, and the release can be approved for comprehensive testing.

## Example of Sanity Testing: 
In an e-commerce project, main modules are login page, home page, user profile page, user registration etc. There is a defect in the login page when the password field accepts less than four alpha numeric characters, and the requirement mentions that this password field should not be below eight characters. Hence, the defect is reported by the testing team to the development team to resolve it.

Then, the development team fixes the reported defect and sends it to the testing team for clearance.
Then, the testing team checks whether the changes done are working fine or not.
It is also determined, if it does have an impact on other related functionalities.
Now, there is a functionality to update the password in the user profile page. As part of the sanity testing, login page is validated as well as the profile page to ensure that the checks are working fine at both the places. 
## Features of Sanity Testing:
Subset of Regression Testing: Sanity testing is a subset of regression testing and focuses on the smaller section of the application. Sanity testing focuses specifically on a smaller group of features that are essential for the fundamental operation of the program, whereas regression testing confirms that new changes do not negatively affect current functionality.
Unscripted: Most of the time sanity testing is not scripted. Without using pre-written scripts, testers frequently conduct ad hoc testing on particular functionalities.
Not documented: Usually, sanity testing is undocumented. Developing thorough test plans is not the main priority, instead, quick and focused testing essential.
Narrow and deep: Sanity testing is a narrow and deep approach of testing where limited functionalities are covered deeply. Instead of aiming to cover the entire application, the testing effort is focused on particular sections.
Performed by testers: Sanity testing is normally performed by testers. Examiners concentrate on the regions impacted by the most recent modifications, quickly evaluating their stability.
## Advantages of Sanity Testing:
Sanity testing helps to quickly identify defects in the core functionality.
It can be carried out in lesser time as no documentation is required for sanity testing.
If the defects are found during sanity testing, project is rejected that is helpful in saving time for execution of regression tests.
This testing technique is not so expensive when compared to another types of testing.
It helps to identify the dependent missing objects.
It is used to verify a small functionality of the system application whether it is still working or not even after a small change.
It helps in the scenario when the time for testing of the product is limited or having less time to complete the test.
Quick Feedback: Sanity testing is a fast process that provides quick feedback on the overall functionality of a software build, allowing teams to quickly identify and address any critical issues.
Cost-effective: Sanity testing is less time-consuming and less expensive than other types of testing, making it a cost-effective solution for evaluating new builds.
Early Detection of Issues: Sanity testing helps to identify major issues early in the development cycle, which can help to avoid costly rework later on.
Increased Confidence: Sanity testing helps to increase confidence in the quality of the software, by ensuring that the most critical functions are working as expected before more comprehensive testing is performed.
Improved Productivity: Sanity testing enables developers and testers to focus on more complex testing scenarios, improving overall productivity and reducing the time required for full regression testing.
## Disadvantages of Sanity Testing:
It focuses only on the functions and commands of the system application.
It is not possible to cover all the test cases in test scenarios.
It covers only few functionalities in the system application. Issues in the unchecked functionalities can’t be recovered.
Sanity testing is usually unscripted. Hence, future references are not available.
It doesn’t cover the design structure level and hence it will be difficult for development team to identify and fix the issues.
Limited Scope: The limited scope of sanity testing means that it may not uncover all potential issues or bugs in the software. This means that more comprehensive testing will be required to thoroughly validate the software’s functionality.
Incomplete Testing: Sanity testing is only a preliminary evaluation of the software, and it does not provide a complete picture of the software’s performance or quality.
Potential for False Positives: Sanity testing is a quick process that may produce false positives, indicating that a particular feature or function is working correctly when it is actually broken.
Dependence on Expertise: The success of sanity testing depends on the expertise and knowledge of the tester, who must have a deep understanding of the software’s critical functions in order to perform the tests effectively.
Time Constraints: While sanity testing is faster than other forms of testing, it can still be time-consuming and may require a significant amount of time and resources to complete. This can be a disadvantage when time is a critical factor in the development process.


## Difference between sanity testing and smoke testing
Software tester working on laptop
As the name implies and as we explained above, sanity testing aims at checking the obvious—whether the intended result of a code change works correctly. Smoke testing, on the other hand, checks if nothing else important was broken in the process.

Some believe that the term 'smoke testing' originated in electronic hardware testing. In his book “Lessons Learned in Software Testing”, Bret Pettichord provides the origin of the term:

"The phrase smoke test comes from electronic hardware testing. You plug in a new board and turn on the power. If you see smoke coming from the board, turn off the power. You don't have to do any more testing."
Thankfully, in software testing there isn’t any actual smoke in the event of failure.

Smoke testing is a type of testing that is used to determine if the software is stable enough to proceed with further testing. It is usually done early in the testing process and is designed to ensure that the most important functionality of the software is working correctly. For people new to software testing it can be difficult to differentiate between smoke and sanity testing, as they are similar. Both are used to verify the basic functionality of an application, but there are three main differences:

Scope
Sanity testing is typically more focused in scope than smoke testing. Sanity testing checks specific functionality, for example, if a particular bug fix is working as expected. Smoke testing, in contrast, has a broader and more thorough test scope that checks the most crucial functionality of the application.
Depth
Sanity testing is a superficial check for one or few specific parts of the application. It is a quick and lightweight testing process that is not designed to uncover deep-seated issues or errors in the system. In comparison, smoke testing is a more thorough test that can uncover major issues or defects in the system, as it tests the critical functionalities independent of the new feature, change or fix.
Purpose
The primary purpose of sanity testing is to confirm that a small change to the system has not caused any unintended side effects or broken any existing functionality. Smoke testing, on the other hand, is used to verify the overall functionality of the system and ensure that it is stable and ready for further testing.
To sum up, the main difference between sanity and smoke testing is that sanity testing checks one or few specific parts of the application, while smoke testing checks the critical functionalities independent of the new feature, change or fix. Now that the main characteristics of sanity and smoke testing are clear, there is another question—which should be done first, sanity or smoke testing?

## Pros and cons of sanity testing
Pros of sanity testing:
Quick. Sanity testing helps to avoid wasting time and effort by quickly determining whether an application is too flawed to merit more rigorous testing.
Efficient. Sanity testing is an efficient way to verify that a small change or modification to the system has not caused any unintended side effects or broken any existing functionality.
Focused scope. Because it is a more focused test, sanity testing allows testers to focus on one or few specific areas of the system and confirm that the changes there have not caused any unintended side effects.
Cost-effective. Sanity testing is typically a fast and lightweight testing process that does not require a lot of resources or time to complete. As a result, it can be a cost-effective way to ensure that the system is still functioning as expected after a change has been made.
Cons of sanity testing
Limited scope. The limited scope of sanity testing means that it may not uncover deep-seated issues or defects in the system.
May not detect all issues. Because it is a superficial check, sanity testing may not detect all issues or errors that may be present in the system.
May not be sufficient. In some cases, the changes made to the system may be more significant than a simple bug fix or code change, in which case a more thorough testing process, such as regression testing, may be needed to ensure the stability and functionality of the system.
Now that we know what sanity testing is, why and when it should be done as well as the advantages and disadvantages of it, only one question remains.

## How to do sanity testing right?
QA engineer planning sanity testing
Here are three best practices for conducting effective sanity testing:

Define the scope. Clearly define the scope of the sanity testing process, establish what exactly needs to be tested. This should include the specific areas of the system that will be tested, as well as any specific requirements or constraints that need to be considered. Sanity testing usually is unscripted, which means that there are no test steps to follow, however, defining the scope (for example, as a checklist of things that need to be tested) would definitely be useful so that nothing important is missed.
Use automated tools. If possible, it is a good idea to automate tests that are run often. Consider using automation testing tools to help streamline the sanity testing process and reduce the time and effort required to complete it. Automating tests speeds up checking and comparing the expected result with the actual one and allows tests to run in parallel. It would also decrease the reliance on regression testing since sanity tests are based on regression tests and if the sanity tests are automated that means that troubleshooting can be continuous.
Review the results. The results of the sanity testing will help to identify any areas where additional testing may be needed. This may include running additional test cases or conducting more thorough testing, such as regression testing.
These best practices may as well be used for other types of testing, like smoke or regression testing, because they are more or less universal. However, sanity testing is relatively easy to do compared to other types of testing that, of course, have their own benefits and purpose but require much more effort. By following these best practices, the sanity testing process will be effective and help to confirm the stability and functionality of the application after small changes or modifications have been made.


