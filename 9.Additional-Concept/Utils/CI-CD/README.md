# What is Continuous Integration(CI)
Continuous integration (CI) is the practice of frequently building and testing a software system during its development. It is intended to ensure that code written by programmers is always buildable, runnable and passes automated testing. Developers merge to an integration branch and an automated system builds and tests.[1] Often, the automated process runs on each commit or runs on a schedule such as once a day.

Grady Booch first proposed the term CI in 1991,[2] although he did not advocate integrating multiple times a day, but later, CI came to include that aspect.[3]

## Goal
A stated goal of CI is to run the automated process frequently enough that no intervening window remains between commit and build, and such that no errors can arise without developers noticing them and correcting them immediately.[1] Generally, this means triggering builds on each commit to a repository. Due to processing limitations, sometimes multiple changes are committed between automation runs.

## Related practices

This section contains instructions, advice, or how-to content. Please help rewrite the content so that it is more encyclopedic or move it to Wikiversity, Wikibooks, or Wikivoyage. (May 2015)
This section lists best practices from practitioners for other practices that enhance CI.

Build automation
Build automation is a best practice.[11][12]

Atomic commits
CI requires the version control system to support atomic commits; i.e., all of a developer's changes are handled as a single commit.

Committing changes
When making a code change, a developer creates a branch that is a copy of the current codebase. As other changes are committed to the repository, this copy diverges from the latest version.

The longer development continues on a branch without merging to the integration branch, the greater the risk of multiple integration conflicts[13] and failures when the developer branch is eventually merged back. When developers submit code to the repository they must first update their code to reflect the changes in the repository since they took their copy. The more changes the repository contains, the more work developers must do before submitting their own changes.

Eventually, the repository may become so different from the developers' baselines that they enter what is sometimes referred to as "merge hell", or "integration hell",[14] where the time it takes to integrate exceeds the time it took to make their original changes.[15]

Testing locally
Proponents of CI suggest that developers should use test-driven development and to ensure that all unit tests pass locally before committing to the integration branch so that one developer's work does not break another developer's copy.

Incomplete features can be disabled before committing, using feature toggles.

Continuous delivery and continuous deployment
Continuous delivery ensures the software checked in on an integration branch is always in a state that can be deployed to users, and continuous deployment automates the deployment process.

Continuous delivery and continuous deployment are often performed in conjunction with CI and together form a CI/CD pipeline.

Version control
Main article: Version control
Proponents of CI recommend storing all files and information needed for building in version control, (for git a repository); that the system should be buildable from a fresh checkout and not require additional dependencies.

Martin Fowler recommends that all developers commit to the same integration branch.[16]

Automate the build
Main article: Build automation
Build automation tools automate building.

Proponents of CI recommend that a single command should have the capability of building the system.

Automation often includes automating the integration, which often includes deployment into a production-like environment. In many cases, the build script not only compiles binaries but also generates documentation, website pages, statistics and distribution media (such as Debian DEB, Red Hat RPM or Windows MSI files).

Everyone commits to the baseline every day
By committing regularly, every committer can reduce the number of conflicting changes. Checking in a week's worth of work runs the risk of conflicting with other features and can be very difficult to resolve. Early, small conflicts in an area of the system cause team members to communicate about the change they are making.[17] Committing all changes at least once a day (once per feature built) is generally considered part of the definition of Continuous Integration. In addition, performing a nightly build is generally recommended.[citation needed] These are lower bounds; the typical frequency is expected to be much higher.

Every commit should be built
The system should build commits to the current working version to verify that they integrate correctly. A common practice is to use Automated Continuous Integration, although this may be done manually. Automated Continuous Integration employs a continuous integration server or daemon to monitor the revision control system for changes, then automatically run the build process.

Every bug-fix commit should come with a test case
When fixing a bug, it is a good practice to push a test case that reproduces the bug. This avoids the fix to be reverted, and the bug to reappear, which is known as a regression.

Keep the build fast
The build needs to complete rapidly so that if there is a problem with integration, it is quickly identified.

Test in a clone of the production environment
Main article: Test environment
Having a test environment can lead to failures in tested systems when they deploy in the production environment because the production environment may differ from the test environment in a significant way. However, building a replica of a production environment is cost-prohibitive. Instead, the test environment or a separate pre-production environment ("staging") should be built to be a scalable version of the production environment to alleviate costs while maintaining technology stack composition and nuances. Within these test environments, service virtualisation is commonly used to obtain on-demand access to dependencies (e.g., APIs, third-party applications, services, mainframes, etc.) that are beyond the team's control, still evolving, or too complex to configure in a virtual test lab.

Make it easy to get the latest deliverables
Making builds readily available to stakeholders and testers can reduce the amount of rework necessary when rebuilding a feature that doesn't meet requirements. Additionally, early testing reduces the chances that defects survive until deployment. Finding errors earlier can reduce the amount of work necessary to resolve them.

All programmers should start the day by updating the project from the repository. That way, they will all stay up to date.

Everyone can see the results of the latest build
It should be easy to find out whether the build breaks and, if so, who made the relevant change and what that change was.

Automate deployment
Most CI systems allow the running of scripts after a build finishes. In most situations, it is possible to write a script to deploy the application to a live test server that everyone can look at. A further advance in this way of thinking is continuous deployment, which calls for the software to be deployed directly into production, often with additional automation to prevent defects or regressions.[18][19]


## Benefits
Continuous integration is intended to produce benefits such as:

Helps detect bugs early and facilitate fixing them due to smaller changesets
Avoids build chaos that otherwise ensures at release time
When a test fails or a bug is found, reverting the codebase to a bug-free baseline entails fewer lost changes
Frequent availability of a known-good build for testing, demo, and release
Frequent code check-in encourages modular, less complex code[20]
Continuous automated testing may include benefits:

Quick feedback on system-wide impact of code changes
Software metrics such as code coverage, code complexity, and feature completeness can focus developers on developing functional, quality code, and help develop momentum in a team[citation needed]

## Costs
Downsides of continuous integration include:

Setup of a build system requires effort.[21]
Constructing and maintaining an automated test suite requires effort although this cost may be offset by the benefits of testing
CI may not be valuable if the project is small
Value added depends on the quality of tests[22]
Tracking deliveries while preserving quality can be difficult
Builds can sit in queue which limits value.[22]
Partial implementation for a feature could easily be pushed and therefore integration tests will fail until the feature is complete.[22]
Safety and mission-critical development assurance (e.g., DO-178C, ISO 26262) require rigorous documentation and in-process review that are difficult to achieve using continuous integration

## CI Workflow
Below is a pictorial representation of a CI pipeline– the workflow from developers checking in their code to its automated build, test, and final notification of the build status.
Once the developer commits their code to a version control system like Git, it triggers the CI pipeline which fetches the changes and runs automated build and unit tests. Based on the status of the step, the server then notifies the concerned developer whether the integration of the new code to the existing code base was a success or a failure.

This helps in finding and addressing the bugs much more quickly, makes the team more productive by freeing the developers from manual tasks, and helps teams deliver updates to their customers more frequently. It has been found that integrating the entire development cycle can reduce the developer’s time involved by ~25 – 30%.


# What is Continuous Delivery(CD)

Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time and following a pipeline through a "production-like environment", without doing so manually.[1][2] It aims at building, testing, and releasing software with greater speed and frequency. The approach helps reduce the cost, time,[citation needed] and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery.

## Principles
Continuous delivery treats the commonplace notion of a deployment pipeline[3] as a lean Poka-Yoke:[4] a set of validations through which a piece of software must pass on its way to release. Code is compiled if necessary and then packaged by a build server every time a change is committed to a source control repository, then tested by a number of different techniques (possibly including manual testing) before it can be marked as releasable.

Developers used to a long cycle time may need to change their mindset when working in a CD environment. It is important to understand that any code commit may be released to customers at any point. Patterns such as feature toggles can be very useful for committing code early which is not yet ready for use by end users. Using NoSQL can eliminate the step of data migrations and schema changes, often manual steps or exceptions to a continuous delivery workflow.[5] Other useful techniques for developing code in isolation such as code branching are not obsolete in a CD world, but must be adapted to fit the principles of CD - for example, running multiple long-lived code branches can prove impractical, as a releasable artifact must be built early in the CD process from a single code branch if it is to pass through all phases of the pipeline.[clarification needed]

## Deployment pipeline

Continuous delivery is enabled through the deployment pipeline. The purpose of the deployment pipeline has three components: visibility, feedback, and continually deploy.[6]

Visibility – All aspects of the delivery system including building, deploying, testing, and releasing are visible to every member of the team to promote collaboration.
Feedback – Team members learn of problems as soon as possible when they occur so that they are able to fix them as quickly as possible.
Continually deploy – Through a fully automated process, you can deploy and release any version of the software to any environment.

## Tools/tool types
Continuous delivery takes automation from source control all the way through production. There are various tools that help accomplish all or part of this process.[7] These tools are part of the deployment pipeline which includes continuous delivery. The types of tools that execute various parts of the process include: continuous integration, application release automation, build automation, application lifecycle management.[8]

## Architecting for continuous delivery
To practice continuous delivery effectively, software applications have to meet a set of architecturally significant requirements (ASRs) such as deployability, modifiability, and testability.[9] These ASRs require a high priority and cannot be traded off lightly.

Microservices are often used when architecting for continuous delivery.[10] The use of Microservices can increase a software system's deployability and modifiability. The observed deployability improvements include: deployment independence, shorter deployment time, simpler deployment procedures, and zero downtime deployment. The observed modifiability improvements include: shorter cycle time for small incremental functional changes, easier technology selection changes, incremental quality attribute changes, and easier language and library upgrades.[10]

## Implementation and usage
The original CD book written by Jez Humble and David Farley (2010) popularized the term; however, since its creation the definition has continued to advance and now has a more developed meaning. Companies today are implementing these continuous delivery principles and best practices. The difference in domains, e.g. medical vs. web, is still significant and affects the implementation and usage.[11] Well-known companies that have this approach include Yahoo!,[12] Amazon,[13] Facebook,[14] Google,[15] Paddy Power[1] and Wells Fargo.[16]

## Benefits and obstacles
Several benefits of continuous delivery have been reported.[1][11]

Accelerated time to market: Continuous delivery lets an organization deliver the business value inherent in new software releases to customers more quickly. This capability helps the company stay a step ahead of the competition.
Building the right product: Frequent releases let the application development teams obtain user feedback more quickly. This lets them work on only the useful features. If they find that a feature isn't useful, they spend no further effort on it. This helps them build the right product.
Improved productivity and efficiency: Significant time savings for developers, testers, operations engineers, etc. through automation.
Reliable releases: The risks associated with a release have significantly decreased, and the release process has become more reliable. With continuous delivery, the deployment process and scripts are tested repeatedly before deployment to production. So, most errors in the deployment process and scripts have already been discovered. With more frequent releases, the number of code changes in each release decreases. This makes finding and fixing any problems that do occur easier, reducing the time in which they have an impact.
Improved product quality: The number of open bugs and production incidents has decreased significantly.
Improved customer satisfaction: A higher level of customer satisfaction is achieved.
Obstacles have also been investigated.[11]

Customer preferences: Some customers do not want frequent updates to their systems.
Domain restrictions: In some domains, such as telecom, medical, avionics, railway and heavy industries, regulations require customer-side or even on-site testing of new versions.
Lack of test automation: Lack of test automation leads to a lack of developer confidence and can prevent using continuous delivery.
Differences in environments: Different environments used in the development, testing and production can result in undetected issues slipping to the production environment.
Tests needing a human oracle: Not all quality attributes can be verified with automation. These attributes require humans in the loop, slowing down the delivery pipeline.
Eight further adoption challenges were raised and elaborated on by Chen.[17] These challenges are in the areas of organizational structure, processes, tools, infrastructure, legacy systems, architecting for continuous delivery, continuous testing of non-functional requirements, and test execution optimization.

## Strategies to overcome adoption challenges

This section contains instructions, advice, or how-to content. Please help rewrite the content so that it is more encyclopedic or move it to Wikiversity, Wikibooks, or Wikivoyage. (January 2022)
Several strategies to overcome continuous delivery adoption challenges have been reported.[17]

Strategies to Overcome CD Adoption Challenges
Strategy	Description
Selling CD as a painkiller	Identify each stakeholder's pain points that CD can solve, and sell CD as a painkiller to that stakeholder. This strategy helps to achieve buy-in from the wide range of stakeholders that a CD implementation requires.
Dedicated team with multi-disciplinary members	Without a dedicated team, it can be hard to progress because employees are often assigned to work on other value streams. A multi-disciplinary team not only provides the wide range of skills required for CD implementation but also smooths the communication with related teams.
Continuous delivery of continuous delivery	Organize the implementation of CD in a way that delivers value to the company as early as possible, onboarding more projects gradually, in small increments and eventually rolling out CD across the whole organization. This strategy helps justify the investment required by making concrete benefits visible along the way. Visible benefits, in turn, help to achieve the sustained company support and investment required to survive the long and tough journey to CD.
Starting with easy but important applications	When selecting the first few applications to migrate to CD, choose the ones that are easy to migrate but that are important to the business. Being easy to migrate helps to demonstrate the benefits of CD quickly, which can prevent the implementation initiative from being killed. Being important to the business helps to secure the required resources, demonstrates clear and unarguable value, and raises the visibility of CD in the organization.
Visual CD pipeline skeleton	Give a team a visual CD pipeline skeleton that has the full CD pipeline view but with empty stages for those they cannot implement yet. This helps to build up a CD mindset and maintain the momentum for CD adoption. The pipeline skeleton is especially useful when the team's migration to CD requires a large effort and mindset changes over a long period of time.
Expert drop	Assign a CD expert to join tough projects as a senior member of the development team. Having the expert on the team helps to build the motivation and momentum to move to CD from inside the team. It also helps to maintain momentum when the migration requires a large effort and a long period of time.

## Relationship to DevOps
Main article: DevOps
DevOps is a software engineering approach that centers around cultural change, specifically the collaboration of the various teams involved in software delivery (developers, operations, quality assurance, management, etc.), as well as automating the processes in software delivery.[18][19][20]

## Relationship to Continuous Deployment
Main article: Continuous deployment
Continuous deployment is a software engineering approach which uses automated software deployments.[17] In it, software is produced in short cycles but through automated software deployments even to production rather than requiring a "click of a button" for that last step.[1]: 52  Therefore, continuous deployment can be considered a more sophisticated form of automation.[21] Academic literature differentiates between continuous delivery and continuous deployment according to deployment method; manual vs. automated.[2][22]

## CI and CD Workflow
The below image describes how Continuous Integration combined with Continuous Delivery helps quicken the software delivery process with lower risks and improved quality.

CI and CD Workflow
CI / CD workflow

We have seen how Continuous Integration automates the process of building, testing, and packaging the source code as soon as it is committed to the code repository by the developers. Once the CI step is completed, the code is deployed to the staging environment where it undergoes further automated testing (like Acceptance testing, Regression testing, etc.). Finally, it is deployed to the production environment for the final release of the product.

If the deployment to production is a manual step. In that case, the process is called Continuous Delivery whereas if the deployment to the production environment is automated, it is referred to as Continuous Deployment.

# Continuous Deployment
Continuous deployment (CD) is a software engineering approach in which software functionalities are delivered frequently and through automated deployments.[1][2][3]

Continuous deployment contrasts with continuous delivery (also abbreviated CD), a similar approach in which software functionalities are also frequently delivered and deemed to be potentially capable of being deployed, but are actually not deployed.[4] As such, continuous deployment can be viewed as a more complete form of automation than continuous delivery.[5]

## Motivation
A major motivation for continuous deployment is that deploying software into the field more often makes it easier to find, catch, and fix bugs. A bug is easier to fix when it comes from code deployed five minutes ago instead of five days ago.[6]

## Example
In an environment in which data-centric microservices provide the functionality, and where the microservices can have multiple instances, continuous deployment consists of instantiating the new version of a microservice and retiring the old version once it has drained all the requests in flight.[7][8][9]



# What are CI/CD pipelines?
A CI/CD pipeline is an automated process utilized by software development teams to streamline the creation, testing and deployment of applications. "CI" represents continuous integration, where developers frequently merge code changes into a central repository, allowing early detection of issues. "CD" refers to continuous deployment or continuous delivery, which automates the application's release to its intended environment, ensuring that it is readily available to users. This pipeline is vital for teams aiming to improve software quality and speed up delivery through regular, reliable updates.

Integrating a CI/CD pipeline into your workflow significantly reduces the risk of errors in the deployment process. Automating builds and tests ensures that bugs are caught early and fixed promptly, maintaining high-quality software.

What is meant by continuous testing? 
Continuous testing is a software testing practice where tests are continuously run in order to identify bugs as soon as they are introduced into the codebase. In a CI/CD pipeline, continuous testing is typically performed automatically, with each code change triggering a series of tests to ensure that the application is still working as expected. This can help to identify problems early in the development process and prevent them from becoming more difficult and costly to fix later on. Continuous testing can also provide valuable feedback to developers about the quality of their code, helping them to identify and address potential issues before they are released to production.

In continuous testing, various types of tests are performed within the CI/CD pipeline. These can include:

Unit testing, which checks that individual units of code work as expected
Integration testing, which verifies how different modules or services within an application work together
Regression testing, which is performed after a bug is fixed to ensure that specific bug won't occur again



## Why is CI/CD Important?
CI/ CD enables organizations to develop software quickly and efficiently. CI/CD enables an effective process for getting products and software to market faster than ever before, continuously moving code into production, and ensuring a steady flow of new features 

## CI/CD fundamentals
There are eight fundamental elements of CI/CD that help ensure maximum efficiency for your development lifecycle. They span development and deployment. Include these fundamentals in your pipeline to improve your DevOps workflow and software delivery:

A single source repository
Source code management (SCM) that houses all necessary files and scripts to create builds is critical. The repository should contain everything needed for the build. This includes source code, database structure, libraries, properties files, and version control. It should also contain test scripts and scripts to build applications.

Frequent check-ins to main branch
Integrate code in your trunk, mainline or master branch — i.e., trunk-based development — early and often. Avoid sub-branches and work with the main branch only. Use small segments of code and merge them into the branch as frequently as possible. Don't merge more than one change at a time.

Automated builds
Scripts should include everything you need to build from a single command. This includes web server files, database scripts, and application software. The CI processes should automatically package and compile the code into a usable application.

Self-testing builds
CI/CD requires continuous testing. Testing scripts should ensure that the failure of a test results in a failed build. Use static pre-build testing scripts to check code for integrity, quality, and security compliance. Only allow code that passes static tests into the build.

Frequent iterations
Multiple commits to the repository results in fewer places for conflicts to hide. Make small, frequent iterations rather than major changes. By doing this, it's possible to roll changes back easily if there's a problem or conflict.

Stable testing environments
Code should be tested in a cloned version of the production environment. You can't test new code in the live production version. Create a cloned environment that's as close as possible to the real environment. Use rigorous testing scripts to detect and identify bugs that slipped through the initial pre-build testing process.

Maximum visibility
Every developer should be able to access the latest executables and see any changes made to the repository. Information in the repository should be visible to all. Use version control to manage handoffs so developers know which is the latest version. Maximum visibility means everyone can monitor progress and identify potential concerns.

Predictable deployments anytime
Deployments should be so routine and low-risk that the team is comfortable doing them anytime. CI/CD testing and verification processes should be rigorous and reliable, giving the team confidence to deploy updates at any time. Frequent deployments incorporating limited changes also pose lower risks and can be easily rolled back.

## What are the Benefits of CI/CD?
Automated testing enables continuous delivery that ensures software quality and safety and increases code profitability in production. CI/ CD pipelines enable a much shorter time-to-market for new product features, resulting in happier customers and reducing the burden on development.
The significant increase in overall delivery speed enabled by CI/CD pipelines improves a company’s competitive advantage.
Automation allows team members to focus on what they do best, resulting in the best end products. Companies with a successful CI/CD pipeline can attract outstanding talent. By moving away from traditional waterfall methods, engineers and developers are no longer engaged in repetitive activities that are often highly dependent on completing other tasks.

## What are Some Common CI/CD Tools?
CI and CD tools can help to team with the development, deployment, and testing, some of highly recommended for the integration part and some are for the development and management of the testing and related functionality.

most of the famous tools for the CI and CD which is Jenkins. It is open source and it will help to handle all types of work and design a simple Ci server to complete the CD hub.

apart from the Jenking, many more sources are available for the proper way of managing CI and CD which are listed below:

Concourse: It is an open-source tool to build the mechanics of CI and CD.
GoCD: it’s used for the modeling and visualization.
Screwdriver is a building platform for CD.
Spinnaker: it’s a CD platform used to build a multi-cloud environment.
"This course is easy to understand and very helpful for beginners. The mentor had great knowledge, he made the concepts clear. Totally worth enrolling. With the help of this course I was able to crack the interview at Wipro" - Nikhil | Placed at Wipro

## The benefits of CI/CD implementation
Companies and organizations that adopt CI/CD tend to notice a lot of positive changes. Here are some of the benefits you can look forward to as you implement CI/CD:

Happier users and customers: Fewer bugs and errors make it into production, so your users and customers have a better experience. This leads to improved levels of customer satisfaction, improved customer confidence, and a better reputation for your organization.

Accelerated time-to-value: When you can deploy any time, you can bring products and new features to market faster. Your development costs are lower, and a faster turnaround frees your team for other work. Customers get results faster, giving your company a competitive edge.

Less fire fighting: Testing code more often, in smaller batches, and earlier in the development cycle can seriously cut down on fire drills. This results in a smoother development cycle and less team stress. Results are more predictable, and it's easier to find and fix bugs.

Hit dates more reliably: Removing deployment bottlenecks and making deployments predictable can remove a lot of the uncertainty around hitting key dates. Breaking work into smaller, manageable bites means it's easier to complete each stage on time and track progress. This approach gives plenty of time to monitor overall progress and determine completion dates more accurately.

Free up developers' time: With more of the deployment process automated, the team has time for more rewarding projects. It's estimated that developers spend between 35% and 50% of their time testing, validating, and debugging code. Automating these processes improves developer experience and significantly improves their productivity.

Less context switching: Getting real-time feedback on their code makes it easier for developers to work on one thing at a time and minimizes their cognitive load. By working with small sections of code that are automatically tested, developers can debug code quickly while their minds are still fresh from programming. Finding bugs is easier because there's less code to review.

Reduce burnout: Research shows that CD measurably reduces deployment pain and team burnout. Developers experience less frustration and strain when working with CI/CD processes. This leads to happier and healthier employees and less burnout.

Recover faster: CI/CD makes it easier to fix issues and recover from incidents, reducing mean time to resolution (MTTR). Continuous deployment practices mean frequent small software updates so when bugs appear, it's easier to pin them down. Developers have the option of fixing bugs quickly or rolling back the change so that the customer can get back to work quickly.

## How does CI/CD fit into the DevOps framework?
CI/CD is a cornerstone practice within the DevOps framework. It bridges the gap between development (Dev) and operations (Ops) through automation and continuous processes. By automating the build, test, and deployment phases, CI/CD enables rapid, reliable software releases. Due to this, it aligns closely with DevOp's goals of improving collaboration, efficiency, and product quality.

As an indispensable component of DevOps and modern software development, CI/CD leverages a purpose-built platform to optimize productivity, increase efficiency, and streamline workflows via automation, testing, and collaboration. This is particularly beneficial as applications scale, helping to simplify development complexity. Moreover, integrating CI/CD with other DevOps practices—such as enhancing security measures early in the development process and tightening feedback loops—enables organizations to overcome development silos, scale operations securely, and maximize the benefits of CI/CD.

This integration ensures that development, security, and operations teams can work more cohesively, streamlining the software development lifecycle. It also encourages a culture of continuous improvement.