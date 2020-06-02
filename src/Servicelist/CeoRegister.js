import React, {Component} from 'react';
import './main.css'
import CalendarSwitch from './calendarToggle';
import Time from './time'
import Time2 from './time2';
import MenuName from './menuName';
import MenuPrice from './menuPrice';
import ImageSwitch from './imageToggle';
import CommentSwitch from './commentToggle';
class CeoRegister extends Component {
    
    render(){
        return (
            <div id="contents">
                <div>        
                <MenuName/>
                </div>
                
                <div>           
                <MenuPrice/>
                </div>

                <div>                          
                <ImageSwitch/>
                </div>

                <div>                              
                <CommentSwitch/>
                </div>

                <div>                                  
                <CalendarSwitch/>
                </div>  

                <div>  
                <Time/>
                </div>

                <div>                 
                <Time2/>
                </div>

            </div>
        );
    }
}
    


export default CeoRegister;