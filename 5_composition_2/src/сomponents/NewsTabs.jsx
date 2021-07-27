import React from "react";
 
 /**
            * Компонент Разделы новостей                   
            */
           
           function NewsTabs() {
            return (
                <>
                   <ul class="nav nav-pills card-header-pills">
                    
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
        
                </>
            );
        }
        
        export default NewsTabs;
           