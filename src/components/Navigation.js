import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/verb">Verbs</Link></li>
      <li><Link to="/verb/hablar">Hablar</Link></li>
    </ol>
);

export default Navigation;