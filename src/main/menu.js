const { Menu } = require('electron');

//订单菜单
var template=[
    {
        label:'文件',
        submenu:[
            {
                label:'编辑列表',
                accelerator:'ctrl+e',
                click:function(menuItem, browserWindow){ 
                  console.log('edit')
                  browserWindow.webContents.send('href', 'edit');
                  // mainWindow.webContents
                }
            },
            {

                label:'关闭',
                accelerator:'ctrl+q',
                click:function(){ 
                    console.log('close');
                }
            }
        ]
    },
    
]

var m=Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);
