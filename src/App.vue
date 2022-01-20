<template>
<!-- Input fields to search data as per user preference -->
  <div id="app text-left" style="margin:20px">
    <h3>ABN Name Lookup</h3>
      <table>
         <tbody><tr>
            <td class="label">Search name:</td>
            <td>
               <input id="name" name="name" type="text" v-model.trim="name" >
               <button type="button" name="ButtonNameLookup" value="ABN Name Lookup" id="ButtonNameLookup" @click="requestData(name,numberOfRows)" >ABN Name Lookup</button> 
            </td>
	      </tr>
         <tr>
            <td class="label">Max results:</td>
            <td>
               <input name="TextBoxMaxResults" type="number"  v-model.trim="numberOfRows" id="TextBoxMaxResults" size="5" value="10">
            </td>
	      </tr>
	      <tr>
	         <td>Message:</td>
			   <td><input type="text" readonly size="100"  :value="this.$store.state.message" id="TextBoxMessage">  </td>
         </tr>	          
         <tr>
	         <td>Matching name(s):</td>
			   <td>
               <select  v-model.trim="currentSelection"  id="ListBoxNames" class="name-list" size="3" style="width:300px">
                        <option  v-for="(item, index) in this.$store.state.data" :value="item.Abn">
                                {{item.Name}}
                         </option>
               </select>
            </td>
         </tr>			
      </tbody></table>

<!-- table to render data as per selected ABN name from list -->

    <div class="container mt-3">
  <h2>{{ currentSelection == "" ? "ABN Lookup" : "Current details for ABN: "+ currentSelection}}</h2>         
      <table class="table table-bordered table-striped">
                <thead v-for="(item, index)  in this.$store.state.data" v-if="item.Abn == currentSelection" :value="item.Abn">
                        <tr>
                            <th  :key="item.Abn">Abn </th><td> {{item.Abn}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">AbnStatus </th><td> {{item.AbnStatus}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">IsCurrent </th><td> {{item.IsCurrent}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">Name </th><td> {{item.Name}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">NameType </th><td> {{item.NameType}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">Postcode </th><td> {{item.Postcode}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">Score </th><td> {{item.Score}} </td>
                        </tr>
                        <tr>
                            <th  :key="item.Abn">State </th><td> {{item.State}} </td>
                        </tr>
                </thead>      
                
  </table>

<!-- Print error message if no data is found -->
  <p>{{ this.$store.state.data.length == 0 ? "No Data is Available. Kindly search some names and try again." : "" }}</p>
</div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
     return {
        name:"",
        numberOfRows:"10",
        currentSelection:""
     }   
  },
   methods:{
     // function to validate the field inputs and request for api call and pass data in query string parameters
    requestData: function (name,numberOfRows){
       if(name == "" || numberOfRows == ""){
          alert("Please enter both the fields and try submitting again. Thanks!")
       }else{
           this.$store.commit("getData", {name, numberOfRows}); 
       }
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
