### Preface

Revising this textbook has presented a unique and gratifying challenge. This is primarily due to the fact that so many people have read, taught, and even cherished this book. The essence and spirit of the book remain unchanged. Its original intent was to enhance the teaching of linear algebra, a subject whose significance continues to grow in the modern world.

One significant enhancement in this edition is the addition of new problems. Years of teaching have necessitated the creation of hundreds of new exam questions, particularly with the advent of online quizzes. I believe you will appreciate the expanded selection of problems, which continue to balance between explanation and computation—two complementary methods of mastering this fascinating subject.

I hold the conviction that a greater number of people require knowledge of linear algebra than calculus. Isaac Newton might disagree with this statement, but it’s important to consider that he isn’t teaching mathematics in the 21st century. Additionally, his teaching skills might not have been exceptional, though we will extend him the benefit of the doubt. While the laws of physics are elegantly described by differential equations, necessitating calculus for Newton, the scope of modern science, engineering, and management—and indeed life itself—has expanded. Consequently, linear algebra has assumed a central role.

I feel compelled to discuss this further, as many universities have yet to adjust their curricula to reflect the growing importance of linear algebra. When dealing with curved lines and surfaces, the initial approach is often to linearize the problem—replacing the curve with its tangent line or fitting the surface with a plane. This transformation renders the problem linear. The true power of linear algebra becomes evident when dealing with multiple variables, whether it’s ten or a thousand, rather than just two.

You might find it hyperbolic to describe a foundational mathematics course as “beautiful.” However, I assure you it is not. The subject begins with two vectors, \(v\) and \(w\), pointing in different directions. The pivotal step involves forming their linear combinations. By multiplying \(v\) by 3 and \(w\) by 4, we get a new vector \(3v + 4w\), which lies in the same plane as \(v\) and \(w\). When we consider all possible combinations, they span the entire plane. In the context of linear equations, we can solve \(cv + dw = b\) if and only if the vector \(b\) resides in the same plane as \(v\) and \(w\).

Moving forward, we transition from combinations of two-dimensional vectors to the realm of linear algebra. If we consider vectors \(v = (1, 2, 3)\) and \(w = (1, 3, 4)\), we can place them into the columns of a matrix:

\[
\text{matrix} = \begin{bmatrix} 1 & 1 \\ 2 & 3 \\ 3 & 4 \end{bmatrix}.
\]

To find combinations of these columns, we multiply the matrix by a vector \((c, d)\):

\[
\begin{bmatrix} 1 & 1 \\ 2 & 3 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} c \\ d \end{bmatrix} = c \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} + d \begin{bmatrix} 1 \\ 3 \\ 4 \end{bmatrix}.
\]

These combinations form a vector space known as the column space of the matrix. In the case of these two columns, this space is a plane. To determine if \(b = (2, 5, 7)\) lies within this plane, we solve the following system of equations:

\[
\begin{bmatrix} 1 & 1 \\ 2 & 3 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} c \\ d \end{bmatrix} = \begin{bmatrix} 2 \\ 5 \\ 7 \end{bmatrix},
\]

which translates to:

\[
\begin{cases}
c + d = 2 \\
2c + 3d = 5 \\
3c + 4d = 7
\end{cases}.
\]

The vector \(b = (2, 5, 7)\) does indeed lie in the plane defined by \(v\) and \(w\). If the third component of \(b\) changes from 7 to any other number, \(b\) would no longer lie in the plane, making the system unsolvable.

The initial part of this book focuses on linear equations \(Ax = b\). Here, matrix \(A\) has \(n\) columns and \(m\) rows, leading us to combinations of \(n\) vectors in \(m\)-dimensional space. Our goal is to form combinations of the columns (column space) and generate \(m\) equations to produce \(b\) (one for each row). These equations might have a solution, but they always have a least-squares solution. The interaction between columns and rows is the crux of linear algebra. Although it can be challenging, it is certainly manageable. The key concepts include:

1. **Column Space:** The set of all possible combinations of the columns.
2. **Row Space:** The set of all possible combinations of the rows.
3. **Rank:** The number of independent columns or rows.
4. **Elimination:** A method to determine the rank of a matrix.

I will pause here to allow you to commence the course.

### Web Pages

It’s important to mention the web pages associated with this book. Numerous messages with suggestions and encouragement have contributed to these resources. You can access them at [MIT 18.06](http://web.mit.edu/18.06), which is updated regularly for the course taught each semester. Linear algebra is also featured on MIT’s OpenCourseWare at [MIT OCW](http://ocw.mit.edu), where 18.06 includes videos of the lectures. Here’s what you can find online:

1. **Lecture Schedule and Homework:** Current homework assignments and exams with solutions.
2. **Course Goals:** Conceptual questions to guide your understanding.
3. **Interactive Java Demos:** Audio-enhanced demos for eigenvalues.
4. **Teaching Codes and MATLAB Problems:** Codes to support learning.
5. **Course Videos:** Complete video lectures available for download.

These web pages serve as a valuable link to the class and a resource for students. I am optimistic about the potential for integrating graphics and sound. Voiceover bandwidth is low, and FlashPlayer is freely available, facilitating quick reviews and active experimentation. Full lectures can be downloaded, and I hope professors and students worldwide find these resources beneficial. My aim is to make this book as useful as possible with all the supplementary material I can provide.

### Other Supporting Materials

- **Student Solutions Manual (ISBN 0-495-01325-0):** This manual provides solutions to the odd-numbered problems in the text.
- **Instructor’s Solutions Manual (ISBN 0-030-10588-4):** This manual includes teaching notes for each chapter and solutions to all problems in the text.

### Structure of the Course

The course revolves around two fundamental problems for square matrices \(A\): \(Ax = b\) and \(Ax = \lambda x\). The first problem has a solution when \(A\) has independent columns, while the second problem seeks independent eigenvectors. A crucial aspect of the course is understanding the concept of “independence.”

Most of us learn best through examples. Consider the matrix:

\[
A = \begin{bmatrix} 1 & 1 & 2 \\ 1 & 2 & 3 \\ 1 & 3 & 4 \end{bmatrix},
\]

which does not have independent columns because column 1 plus column 2 equals column 3. Linear algebra has a wonderful theorem stating that the rows are not independent either. The third row must lie in the same plane as the first two rows, and a combination of rows 1 and 2 will produce row 3. This combination can be identified through elimination, revealing that twice row 2 minus row 1 yields row 3.

Elimination is a straightforward and natural method to simplify a matrix by creating zero entries. The course begins here but quickly moves on to exploring row combinations, row independence, and the dimension of the row space. Understanding entire vector spaces, such as the row space, column space, and nullspace, is a key objective.

Another goal is to comprehend how the matrix transforms space. When \(A\) multiplies \(x\), it produces the new vector \(Ax\), transforming the entire vector space. Special transformations arise from particular matrices, forming the foundation stones of linear algebra: diagonal matrices, orthogonal matrices, triangular matrices, and symmetric matrices. The eigenvalues of these matrices are also special, providing valuable insights even in small matrices, as demonstrated in Sections 5.1 and 5.2.

The beauty of linear algebra manifests in various ways:

1. **Visualization:** Understanding vector combinations, vector spaces, and transformations such as rotation, reflection, and projection. Recognizing perpendicular vectors and the four fundamental subspaces.
2. **Abstraction:** Grasping the independence of vectors, the basis and dimension of vector spaces, linear transformations, singular value decomposition, and the optimal basis.
3. **Computation:** Utilizing elimination to create zero entries, Gram-Schmidt process to produce orthogonal vectors, and eigenvalues to solve differential and difference equations.
4. **Applications:** Applying least-squares solutions, approximating differential equations with difference equations, working with Markov probability matrices (crucial for Google’s algorithms), and understanding principal axes through orthogonal eigenvectors.

For further exploration of

 these applications, I recommend the books published by Wellesley-Cambridge Press, which cover linear algebra applied to signal processing, partial differential equations, scientific computing, and even GPS technology. Visit [Wellesley Cambridge Press](http://www.wellesleycambridge.com) to see why linear algebra is so widely utilized.

### Conclusion

After this preface, the book will speak for itself. You will immediately sense its spirit, which emphasizes understanding rather than rote learning. This book is about real mathematics, not endless drills. In my classes, I continuously work with examples to ensure that students grasp the material.

### Acknowledgments

Writing this book has been an enjoyable experience, and I hope you find reading it equally pleasurable. Much of this enjoyment stems from collaborating with friends. Brett Coonley, Cordula Robinson, and Erin Maneri were instrumental in creating the LaTeX files and illustrations. Without Brett’s consistent support, this new edition would not have been completed. Steven Lee and Cleve Moler contributed to the development of the Teaching Codes, which align with the steps described in the book. MATLAB, Maple, and Mathematica expedite computations for large matrices, and all can be optionally used in this course. Factorization could be considered a fifth key aspect of matrix understanding:

- **LU Factorization** \([L, U, P] = \text{lu}(A)\) for solving linear equations.
- **QR Factorization** \([Q, R] = \text{qr}(A)\) to orthogonalize columns.
- **Eigen Decomposition** \([S, E] = \text{eig}(A)\) for finding eigenvectors and eigenvalues.

Finally, I extend my gratitude to my parents, who were acknowledged in the first dedication of this textbook many years ago. Their unselfish gifts and inspiring example have been invaluable. I also thank you, the reader, and hope you find this book helpful and enjoyable.

Gilbert Strang