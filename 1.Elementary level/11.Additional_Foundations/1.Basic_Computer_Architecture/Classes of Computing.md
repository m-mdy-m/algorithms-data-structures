### Classes of Computing Applications and Their Characteristics

Computers, despite using a common set of hardware technologies, are tailored to meet the varied requirements of different applications, from smart home appliances to the largest supercomputers. These applications necessitate distinct design approaches, utilizing core hardware technologies in diverse ways. Broadly speaking, computers serve three main classes of applications: personal computers (PCs), servers, and embedded computers.

#### Personal Computers (PCs)

Personal computers are perhaps the most familiar type of computing device, likely well-known to readers of this book. PCs prioritize delivering good performance to individual users at an affordable cost. They typically run third-party software and have been a significant driver in the evolution of many computing technologies over the past 35 years. PCs are designed to be versatile, handling a variety of tasks such as word processing, internet browsing, gaming, and more, making them a staple in both personal and professional environments.

#### Servers

Servers represent the modern evolution of what were once much larger computers. Unlike PCs, servers are typically accessed via a network and are designed to handle large workloads. These workloads can either be single complex applications—commonly scientific or engineering applications—or numerous small tasks, such as those required for large web servers. Server applications are usually based on third-party software, such as databases or simulation systems, and are often modified or customized for specific functions.

Servers share the same basic technology as desktop computers but are built to provide greater computing power, storage capacity, and input/output capabilities. They also emphasize dependability, as crashes can be more costly compared to single-user PCs. Servers range widely in cost and capability, from low-end servers costing around a thousand dollars—essentially desktop computers without screens or keyboards, used for file storage or small business applications—to supercomputers costing tens to hundreds of millions of dollars. Supercomputers, which can consist of tens of thousands of processors and many terabytes of memory, are used for high-end scientific and engineering calculations like weather forecasting, oil exploration, and protein structure determination. Despite their advanced capabilities, supercomputers make up a small fraction of the server market in terms of total revenue.

#### Embedded Computers

Embedded computers form the largest class of computers, encompassing a vast range of applications and performance levels. They include microprocessors in cars, computers in television sets, and networks of processors controlling modern airplanes or cargo ships. Embedded systems are designed to run one application or a set of related applications, integrated with hardware and delivered as a single system. Although embedded computers are ubiquitous, most users are unaware of their presence.

Embedded applications often have unique requirements that balance minimum performance with strict cost or power limitations. For example, a music player processor only needs to be fast enough for its specific function, with the primary design goals being cost minimization and power efficiency. Despite their low cost, embedded computers often require high reliability, as failures can range from inconvenient (e.g., a television crashing) to catastrophic (e.g., a plane or cargo ship computer failing). In consumer-oriented applications, dependability is often achieved through simplicity, focusing on performing one function flawlessly. In larger embedded systems, redundancy techniques from the server world are frequently employed. While this book primarily addresses general-purpose computers, many concepts apply directly or with slight modifications to embedded computers.

#### Elaboration: Processor Cores and Customization

Elaborations throughout the text provide more detailed insights into specific topics. These sections can be skipped by disinterested readers without affecting the comprehension of subsequent material.

Many embedded processors are designed using processor cores, which are versions of processors written in hardware description languages like Verilog or VHDL. Processor cores allow designers to integrate application-specific hardware with the processor core for fabrication on a single chip, enhancing the customization and efficiency of embedded systems.

#### Understanding Data Sizes: Decimal and Binary Notations

To clarify the often confusing terminology around data sizes, the text provides a comparison between decimal and binary notations for bytes, noting the percentage difference between the two:

| Decimal Term | Abbreviation | Value    | Binary Term | Abbreviation | Value  | % Larger |
|--------------|--------------|----------|-------------|--------------|--------|----------|
| kilobyte     | KB           | 10³      | kibibyte    | KiB          | 2¹⁰    | 2%       |
| megabyte     | MB           | 10⁶      | mebibyte    | MiB          | 2²⁰    | 5%       |
| gigabyte     | GB           | 10⁹      | gibibyte    | GiB          | 2³⁰    | 7%       |
| terabyte     | TB           | 10¹²     | tebibyte    | TiB          | 2⁴⁰    | 10%      |
| petabyte     | PB           | 10¹⁵     | pebibyte    | PiB          | 2⁵⁰    | 13%      |
| exabyte      | EB           | 10¹⁸     | exbibyte    | EiB          | 2⁶⁰    | 15%      |
| zettabyte    | ZB           | 10²¹     | zebibyte    | ZiB          | 2⁷⁰    | 18%      |
| yottabyte    | YB           | 10²⁴     | yobibyte    | YiB          | 2⁸⁰    | 21%      |

This chart highlights how binary terms are slightly larger than their corresponding decimal terms, with the difference growing more significant as the sizes increase. These prefixes are applicable to both bits and bytes, providing clarity in understanding data sizes.

By exploring these three main classes of computing applications—personal computers, servers, and embedded computers—this book aims to provide a comprehensive understanding of the diverse uses and design requirements of modern computing technologies.

---

### The PostPC Era and the Rise of Personal Mobile Devices

The computing landscape has dramatically shifted in recent years, marking the onset of the PostPC era. This era is characterized by the rise of personal mobile devices (PMDs) such as tablets and smartphones, which have become central to computing, surpassing traditional personal computers (PCs) and conventional cell phones in production numbers. Figure 1.2 illustrates this shift, showing the rapid increase in the manufacturing of tablets and smartphones compared to PCs and traditional cell phones. By 2011, smartphones had already overtaken PCs in production volume, and tablets emerged as the fastest-growing category, nearly doubling their numbers between 2011 and 2012. In contrast, the production of recent PCs and traditional cell phones has remained relatively flat or has declined.

PMDs are defined as battery-operated devices with wireless connectivity to the Internet, typically costing a few hundred dollars. They are similar to PCs in that users can download software applications ("apps") to run on them. However, unlike PCs, PMDs have moved away from traditional input devices like keyboards and mice, instead relying on touch-sensitive screens or even speech input. Examples of today's PMDs include smartphones and tablet computers, but the category could expand in the future to include devices such as electronic glasses.

### Cloud Computing and Warehouse Scale Computers

The traditional server model is being replaced by Cloud Computing, which utilizes giant datacenters now referred to as Warehouse Scale Computers (WSCs). Companies like Amazon and Google have built these massive facilities containing hundreds of thousands of servers. They then offer portions of these WSCs for rent to other companies, allowing them to provide software services to PMDs without the need to build their own WSCs. This model has given rise to Software as a Service (SaaS), which is revolutionizing the software industry just as PMDs and WSCs are revolutionizing hardware. Modern software developers often design their applications with components that run on PMDs and other components that run in the Cloud.

### What You Can Learn in This Book

Successful software development has always hinged on the performance of the programs. In the 1960s and 1970s, a key constraint on computer performance was the size of the computer’s memory, leading to a programming credo of minimizing memory space to maximize speed. Advances in computer design and memory technology over the last decade have reduced the importance of small memory sizes in most applications, except for embedded computing systems. However, new challenges have arisen.

Programmers now need to grasp the parallel nature of processors and the hierarchical structure of memories. Additionally, as discussed in Section 1.7, understanding the energy efficiency of programs running on either PMDs or in the Cloud is crucial. This requires a deeper knowledge of the underlying computer organization. By delving into the details of software and hardware, this book aims to equip you with the knowledge necessary to improve the performance and efficiency of your programs.

By the time you finish this book, you will be able to answer several fundamental questions:

1. **Translation of High-Level Languages to Hardware Language:**
   - How are programs written in high-level languages such as C or Java translated into the language of the hardware?
   - How does the hardware execute the resulting program?
   - Understanding these concepts is essential for grasping the hardware and software aspects that affect program performance.

2. **Software-Hardware Interface:**
   - What is the interface between software and hardware?
   - How does software instruct hardware to perform necessary functions?
   - These concepts are crucial for writing various kinds of software.

3. **Program Performance:**
   - What determines the performance of a program?
   - How can a programmer improve performance?
   - This depends on the original program, the software translation of that program into the computer’s language, and the hardware's effectiveness in executing the program.

4. **Improving Performance through Hardware Design:**
   - What techniques can hardware designers use to improve performance?
   - This book introduces the basic concepts of modern computer design, with more detailed material available in our advanced book, "Computer Architecture: A Quantitative Approach."

5. **Energy Efficiency:**
   - What techniques can hardware designers use to improve energy efficiency?
   - How can programmers contribute to or hinder energy efficiency?

6. **Parallel Processing:**
   - What are the reasons for and consequences of the switch from sequential to parallel processing?
   - This book provides the motivation, describes current hardware mechanisms supporting parallelism, and surveys the new generation of "multicore" microprocessors, as discussed in Chapter 6.

7. **Foundational Ideas in Computer Architecture:**
   - What great ideas from computer architects since the first commercial computer in 1951 lay the foundation of modern computing?

### Multicore Microprocessors

A multicore microprocessor is a single integrated circuit containing multiple processors ("cores"). This book will explore these processors in depth, discussing their design, function, and impact on modern computing.


---

### The Importance of Understanding Computer Fundamentals

Without a clear understanding of fundamental questions about computer architecture and software interactions, improving the performance of your programs or evaluating the features of different computers for specific applications becomes a complex process of trial and error. Instead, it should be a scientific procedure driven by insight and analysis.

### Laying the Foundation

This first chapter is designed to lay the foundation for the entire book. It introduces basic ideas and definitions, places major software and hardware components in perspective, explains how to evaluate performance and energy, introduces integrated circuits (the technology that fuels the computer revolution), and explains the shift to multicore processors.

### Terminology and Acronyms

As you proceed through this chapter and the subsequent ones, you will likely encounter many new terms, or words that you may have heard but are unsure about their meanings. Don’t panic! Yes, the field of modern computing uses a lot of specialized terminology, but this actually helps in precisely describing functions or capabilities. Additionally, computer designers (including the authors of this book) love using acronyms. Acronyms are easy to understand once you know what the letters stand for. To assist with this, every term is highlighted and defined in the margins the first time it appears in the text. After some time working with the terminology, you will become fluent, and your friends will be impressed as you correctly use acronyms such as BIOS, CPU, DIMM, DRAM, PCIe, SATA, and many others.

### Understanding Program Performance

To reinforce how software and hardware systems affect program performance, we have included a special section called "Understanding Program Performance" throughout the book. These sections summarize important insights into program performance. The first one appears below.

### How Different Components Affect Performance

The performance of a program depends on several factors: the effectiveness of the algorithms used, the software systems used to create and translate the program into machine instructions, and the effectiveness of the computer in executing those instructions, including input/output (I/O) operations. The table below summarizes how different hardware and software components affect performance.

| Hardware or Software Component | How This Component Affects Performance                             | Where is This Topic Covered? |
|--------------------------------|-------------------------------------------------------------------|------------------------------|
| Algorithm                      | Determines the number of source-level statements and I/O operations | Other books!                 |
| Programming language, compiler, and architecture | Determines the number of computer instructions for each source-level statement | Chapters 2 and 3             |
| Processor and memory system    | Determines how fast instructions can be executed                   | Chapters 4, 5, and 6         |
| I/O system (hardware and operating system) | Determines how fast I/O operations may be executed                   | Chapters 4, 5, and 6         |

### Improving Program Performance

To demonstrate the impact of the ideas in this book, we will improve the performance of a C program that multiplies a matrix by a vector across several chapters. Each step leverages an understanding of how underlying hardware works in a modern microprocessor to improve performance by a factor of 200!

- **Data Level Parallelism**: In Chapter 3, we use subword parallelism via C intrinsics to increase performance by a factor of 3.8.
- **Instruction Level Parallelism**: In Chapter 4, we use loop unrolling to exploit multiple instruction issue and out-of-order execution hardware, increasing performance by another factor of 2.3.
- **Memory Hierarchy Optimization**: In Chapter 5, we use cache blocking to increase performance on large matrices by another factor of 2.5.
- **Thread Level Parallelism**: In Chapter 6, we use parallel for loops in OpenMP to exploit multicore hardware, increasing performance by another factor of 14.

### Check Yourself Sections

"Check Yourself" sections are designed to help readers assess whether they comprehend the major concepts introduced in a chapter and understand the implications of those concepts. Some "Check Yourself" questions have simple answers, while others are meant for group discussion. Answers to specific questions can be found at the end of the chapter. These sections only appear at the end of a section, making it easy to skip them if you are confident in your understanding of the material.

#### Example Check Yourself Questions:

1. **Embedded Processors vs. PCs and PostPC Processors**:
   - The number of embedded processors sold each year greatly outnumbers the number of PC and PostPC processors. Can you confirm or deny this based on your own experience? Try counting the embedded processors in your home. How does this number compare to the number of conventional computers in your home?

2. **Performance Bottlenecks**:
   - Both software and hardware affect the performance of a program. Can you think of examples where each of the following is the right place to look for a performance bottleneck?
     - The algorithm chosen
     - The programming language or compiler
     - The operating system
     - The processor
     - The I/O system and devices

### Conclusion

This chapter sets the stage for a comprehensive exploration of computer architecture and organization, providing the necessary tools and concepts to understand and improve program performance on modern computers. By mastering these concepts, you will be equipped to evaluate and enhance the efficiency of both software and hardware, ultimately leading to better-performing applications.