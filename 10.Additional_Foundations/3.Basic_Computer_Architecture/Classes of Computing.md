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