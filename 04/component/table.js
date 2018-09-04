Vue.component('Table',{
props:{
    column:Array,
    data:Array,
    striped:Boolean,
    hover:Boolean,
    bordered:Boolean

},
template:`

<table class="table"  
:class="{
    'table-striped':striped,
    'table-hover':hover,
    'table-bordered':bordered
}">
            <thead>
                <tr>
                <th v-for=' item in column'>{{item}}</th>
               
            </tr>
                </thead>
                
                <tbody>
                    <tr v-for='item in data'>
                    <td v-for='list in item'>
                    {{list}}
                    </td>
                     </tr>
                    </tbody>
            </table>

`
})