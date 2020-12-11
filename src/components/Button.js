import React from 'react';
import {Link} from 'gatsby';

export default ({ title, link, onclick }) => <Link to={link} className="g-btn">{title}</Link>;