import React from 'react';
import {Link} from 'gatsby';

export default ({title,link}) => <Link to={link} className="g-btn">{title}</Link>;