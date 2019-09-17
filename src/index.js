import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import './styles/styles.css';
// do not include bootstrap in npm run build
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilterableCourseTable from './components/FilterableCourseTable';

// UPDATE f=coursecatalog2 to coursecatalog when going to production
ReactDOM.render(<FilterableCourseTable catalog={"https://oldtownschool.org/lib/include/coursecatalog.php?f=coursecatalog2"} />, document.getElementById('searchContainer'));
