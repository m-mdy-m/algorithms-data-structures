### Multiplexing in Telecommunications and Computer Networking

**Definition and Purpose**
Multiplexing, often abbreviated as muxing, is a technique used in telecommunications and computer networking to combine multiple analog or digital signals into one signal over a shared medium. This method aims to efficiently share a limited resource, typically a physical transmission medium, allowing several signals to be transmitted simultaneously. For instance, in telecommunications, multiple telephone calls can be transmitted over a single wire.

**Historical Background**
The concept of multiplexing dates back to the 1870s in telegraphy. George Owen Squier significantly advanced the field by developing telephone carrier multiplexing in 1910.

**Functionality**
A multiplexed signal is sent through a communication channel, such as a cable. The channel's capacity is divided into several logical channels, each carrying a distinct message signal or data stream. The original signals are retrieved at the receiver end through a process called demultiplexing. Devices performing multiplexing are called multiplexers (MUX), while those handling demultiplexing are demultiplexers (DEMUX or DMX).

**Inverse Multiplexing**
Inverse multiplexing (IMUX) works oppositely by splitting one data stream into several streams, transmitting them over multiple channels, and then reconstructing the original stream at the destination.

**I/O Multiplexing in Computing**
In computing, I/O multiplexing refers to processing multiple input/output events within a single event loop using system calls like `poll` and `select` in Unix.

### Types of Multiplexing

1. **Statistical Multiplexing**
   - Transmits multiple variable bit rate digital bit streams over a single fixed bandwidth channel.
   - A form of asynchronous time-domain multiplexing, related to time-division multiplexing.

2. **Code-Division Multiplexing**
   - Transfers digital bit streams over an analog channel using techniques like frequency-hopping spread spectrum (FHSS) and direct-sequence spread spectrum (DSSS).

3. **Space-Division Multiplexing**
   - Uses separate point-to-point conductors for each transmitted channel.
   - Examples: Stereo audio cables, multi-pair telephone cables, switched star networks, switched Ethernet networks, and mesh networks.

4. **Frequency-Division Multiplexing (FDM)**
   - An analog technology that sends signals in distinct frequency ranges over a single medium.
   - Commonly used in radio and television broadcasting, including cable television.
   - Variant: Wavelength-Division Multiplexing (WDM) for optical communications.

5. **Time-Division Multiplexing (TDM)**
   - A digital (or sometimes analog) technology that uses time to separate different data streams.
   - Sequences bits or bytes from each input stream in such a way that they can be associated with the appropriate receiver.
   - Applications: Telecommunication, HTTP pipelining, legacy telephony networks.

6. **Polarization-Division Multiplexing**
   - Utilizes the polarization of electromagnetic radiation to separate orthogonal channels.
   - Used in radio and optical communications, particularly in high-speed fiber optic transmission systems.

7. **Orbital Angular Momentum Multiplexing**
   - An experimental technique using electromagnetic radiation's orbital angular momentum to multiplex multiple channels over a single path.
   - Can significantly expand transmission capacity, still in early research stages.

8. **Code-Division Multiplexing (CDM)**
   - Several channels share the same frequency spectrum using a class of techniques like direct sequence spread spectrum.
   - Used in applications such as GPS and 3G mobile communications.

### Multiplexing in OSI Model and TCP/IP Model
- **OSI Model:** Multiplexing occurs at the Physical Layer, while multiple access methods involve the Data Link Layer.
- **TCP/IP Model:** The Transport layer provides statistical multiplexing for multiple application layer data flows.

### Application Areas

1. **Telegraphy**
   - Early multiplexing experiments included time-multiplexing and frequency-division multiplexing techniques.

2. **Telephony**
   - Modern telephony involves multiplexing signals at concentrator boxes and transmitting them to central offices over fewer wires.
   - Technologies like Fiber in the Loop (FITL) and Asynchronous Transfer Mode (ATM) are common.

3. **Video Processing**
   - Multiplexing in video editing involves interleaving audio and video into a single data stream.

4. **Digital Broadcasting**
   - Digital television systems use statistical multiplexing to transfer multiple variable bit-rate streams over a fixed bit-rate transport stream.
   - Digital radio and satellite communications also use multiplexing techniques.

5. **Analog Broadcasting**
   - FM broadcasting involves adding subcarriers to the audio signal, a form of time-division multiplexing.

6. **Other Fields**
   - Spectroscopy: Uses multiplexing to perform experiments with mixed frequencies.
   - Computer Programming: Multiplexing refers to managing multiple external resources through a single in-memory resource.
   - DNA Sequencing: Multiplexing links sequence reads to specific samples, allowing multiple samples to be processed simultaneously.

### Conclusion
Multiplexing is a versatile and essential technique in telecommunications and computer networking, enabling efficient use of transmission media and supporting a wide range of applications from telephony to digital broadcasting and beyond.