import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='flex'>
          <div className='w-1/2'>
          <div className='m-10'>
                <h1 className='font-semibold text-2xl'>Difference between SQL and NoSQL</h1>
                <p>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used. <br /> 
                The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute. <br />
                Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>
            </div>
            <div className='m-10'>
                <h1 className='font-semibold text-2xl'>What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />
                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. <br />
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br />
                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>
          </div>
            <div className='w-1/2'>
            <div className='m-10'>
                <h1 className='font-semibold text-2xl'>What is the difference between javascript and NodeJS?</h1>
                <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. <br />
                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />
                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />
                4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.</p>
            </div>
            <div className='m-10'>
                <h1 className='font-semibold text-2xl'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>JavaScript is a lightweight, object-oriented programming language for creating dynamic HTML pages with combined effects. When launched in the V8 engine or via the node interpreter, Node.js typically represents several objects and functions accessible to JavaScript code. <br />
                The differences between Node.js and JavaScript will be discussed in this post. But, before we get into the differences, let's review JavaScript and Node.js. <br />
                Ryan Dahl invented and popularised Node.js in 2009. Web apps, command-line apps, real-time chat apps, and REST API servers are just a few applications that can be built using Node.js. It is, however, mainly used to create network programs like web servers—Node.js’s standard filename extension is.js. You can enroll in the best node js course online if you find helpful node js.</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;