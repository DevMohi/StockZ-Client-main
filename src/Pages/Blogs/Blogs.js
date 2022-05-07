import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <h1 className='text-center mb-3'>Q/A</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h6>Difference between  javascript and nodejs</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Javascript is a simple programming language that can run in any browser, Whereas Node JS is an interpreter or running enviroment for a Javascript programming language that holds many excesses, it uses libraries that can be easily accessed from Javascript programming for better use.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h6>When should you use nodejs and when should you use mongodb</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            NodeJs is a javascript runtime enviroment. It helps Javascript to run outside of server. It is used in server side deployment. MongoDB is a NoSQL database which is document oriented, It represents data as of JSON documents, further it is used to store data.
                            The Summary is MongoDB is a database where we can store data and NodeJs helps us to connect our client site to database by its server site.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>
                        Differences between sql and nosql databases</h6>.</Accordion.Header>
                    <Accordion.Body>
                        Some Differences between SQL and NoSQL are as followed:
                        <ul>
                            <li>SQL databases are relational, NoSQL databases are non-relational</li>
                            <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h6>
                        What is the purpose of jwt and how does it work</h6></Accordion.Header>
                    <Accordion.Body>
                        JWT, or JSON Web Token, is an open standard that allows two parties — a client and a server — to share security information. JSON objects, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;