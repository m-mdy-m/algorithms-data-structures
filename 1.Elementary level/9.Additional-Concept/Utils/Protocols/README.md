## **Detailed Concepts of Network Protocols**

> [Before Read](./1.Please_Read./)

### 1. [**FDM (Frequency Division Multiplexing)**]()
- **Deeper Understanding**:
  - **Guard Bands**: Small frequency ranges between channels to prevent overlap and interference.
  - **Applications**: Analog broadcasting, cable television, and cellular networks.
  - **Advantages**: Simultaneous transmission of multiple signals.
  - **Challenges**: Requires a wider bandwidth and more complex receiver design.

### 2. [**Circuit Switching**]()
- **Deeper Understanding**:
  - **Phases**:
    1. **Circuit Establishment**: Connection path is set up.
    2. **Data Transfer**: Information is transmitted.
    3. **Circuit Teardown**: Connection is released.
  - **Efficiency**: Poor utilization of resources if the channel is idle.
  - **Applications**: PSTN (Public Switched Telephone Network), legacy networks.
  - **Alternative**: Packet switching is more efficient for bursty data transmissions.

### 3. **Multiplexing**
- **Deeper Understanding**:
  - **WDM (Wavelength Division Multiplexing)**: Used in fiber optics to combine multiple wavelengths of light.
  - **Statistical Multiplexing**: Dynamically allocates bandwidth based on demand.
  - **Applications**: Telecommunications, data transmission, broadcasting.

### 4. **Packet Switching**
- **Deeper Understanding**:
  - **Protocols**: 
    - **IP (Internet Protocol)**: Provides logical addressing and routing.
    - **TCP (Transmission Control Protocol)**: Ensures reliable data delivery with error correction.
    - **UDP (User Datagram Protocol)**: Provides a connectionless service for speed and efficiency.
  - **Packet Structure**: Header (with metadata) + Payload (actual data).
  - **Routing**: Packets can take different paths to the destination.
  - **Congestion Control**: Mechanisms to prevent network congestion and packet loss.

### 5. **3-Way Handshake**
- **Deeper Understanding**:
  - **Purpose**: Establishes a reliable connection and synchronizes sequence numbers.
  - **Detailed Steps**:
    1. **SYN**: Client sends SYN segment with an initial sequence number (ISN).
    2. **SYN-ACK**: Server responds with SYN-ACK, acknowledging client's ISN and sending its own ISN.
    3. **ACK**: Client acknowledges server's ISN, establishing the connection.
  - **Security Concerns**: Vulnerable to SYN flood attacks, a type of denial-of-service attack.

### 6. **Internet Protocol Suite**
- **Deeper Understanding**:
  - **OSI Model Comparison**: Similar to the OSI model but with four layers.
  - **Key Protocols**:
    - **IP**: IPv4 and IPv6, addressing, and fragmentation.
    - **TCP/UDP**: Connection-oriented vs. connectionless communication.
    - **ICMP**: Internet Control Message Protocol for error messages and diagnostics (e.g., ping).
  - **Addressing**: IPv4 (32-bit addresses) vs. IPv6 (128-bit addresses), and the concept of subnets.

### 7. **Packets, Connections, and Datagrams**
- **Deeper Understanding**:
  - **Packets**: Contain headers (source, destination, error-checking data) and payload.
  - **Connections**: Managed by protocols like TCP, involving connection setup, maintenance, and teardown.
  - **Datagrams**: Independent packets, typically used in connectionless protocols like UDP.
  - **Fragmentation and Reassembly**: Handling packets that exceed the maximum transmission unit (MTU).

### **Additional Protocol Concepts**

### 8. **TCP/IP (Transmission Control Protocol/Internet Protocol)**
- **Deeper Understanding**:
  - **TCP Features**: 
    - **Flow Control**: Prevents sender from overwhelming the receiver (using window size).
    - **Congestion Control**: Algorithms to control data flow (e.g., slow start, congestion avoidance).
    - **Error Detection**: Checksum for error-checking.
  - **IP Features**: 
    - **Routing Protocols**: OSPF (Open Shortest Path First), BGP (Border Gateway Protocol).
    - **NAT (Network Address Translation)**: Allows private IP addresses to be mapped to a public IP address.
    - **IPv6 Enhancements**: Larger address space, simplified header format, improved security (IPsec).

### 9. **gRPC (gRPC Remote Procedure Calls)**
- **Deeper Understanding**:
  - **Transport Layer**: Utilizes HTTP/2, which provides performance improvements over HTTP/1.1.
  - **IDL (Interface Definition Language)**: Protocol Buffers (protobuf) for defining service interfaces and message types.
  - **Unary and Streaming RPCs**: Supports different types of communication patterns (e.g., client-side, server-side, bidirectional streaming).
  - **Use Cases**: Microservices, inter-service communication in distributed systems.

### 10. **HTTP/2 and HTTP/3**
- **Deeper Understanding**:
  - **HTTP/2 Enhancements**:
    - **Binary Framing Layer**: More efficient parsing compared to text-based HTTP/1.1.
    - **Stream Prioritization**: Allows prioritization of resource delivery.
    - **Header Compression**: HPACK compression reduces overhead.
  - **HTTP/3 Features**:
    - **QUIC Protocol**: Built on UDP for faster connection establishment and reduced latency.
    - **Reliability**: Includes mechanisms for error correction and retransmission.
    - **Security**: Always encrypted, combining TLS with transport.
