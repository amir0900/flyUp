<template>
<div >
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">from</th>
      <th scope="col">to</th>
      <th scope="col">departureTime </th>
      <th scope="col">landingTime </th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(fly,index) in getFly">
      <th scope="row">{{index}}</th>
      <td>{{fly.from}}</td>
      <td>{{fly.to}}</td>
      <td>{{fly.departureTime}}</td>
      <td>{{fly.landingTime}}</td>
      <td>{{fly.price}}</td>
    </tr>
  </tbody>
</table>
<input class="form-control"  v-model="searchFly" placeholder="search">
<br>
  <form class="text-left col-md-6" v-on:submit.prevent="addFly">
    <div class="form-group row">
      <label class="col-sm-2"   name="from">from</label>
      <input class="col-sm-10 form-control" v-model="from" type="text">
    </div>
    <div class="form-group row">
      <label class="col-sm-2"   name="from">to</label>
      <input class="col-sm-10 form-control" v-model="to" type="text">
    </div>
    <div class="form-group row">
      <label class="col-sm-2"  name="from">departureTime </label>
      <input class="col-sm-10 form-control" v-model="departureTime" type="text">
    </div>
    <div class="form-group row">
      <label class="col-sm-2" name="from">landingTime</label>
      <input class="col-sm-10 form-control"  v-model="landingTime" type="text">
    </div>
    <div class="form-group row">
      <label class="col-sm-2" name="from">price</label>
      <input class="col-sm-10 form-control"  v-model="price"  type="text">
    </div>
    <button class="btn-primary btn">add new flight</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      from:'',
      to:'',
      departureTime:'',
      landingTime:'',
      price:'',
      flights: [
        {from:'ILS',to:'USA',departureTime :'10:00',landingTime:'12:00',price:100},
        {from:'BUL',to:'DEU',departureTime :'11:00',landingTime:'18:00',price:200},
      ],
      searchFly: ""
    };
  },
  methods:{
    addFly(){
      let newFly = {from:this.from,to:this.to,departureTime :this.departureTime,landingTime:this.landingTime,price:this.price}
      this.flights.push(newFly)
    }
  },
  computed:{
    getFly(){
      let self = this;
       return this.flights.filter(fly => {
          return (
            fly.to.toLowerCase().indexOf(self.searchFly.toLowerCase()) >= 0
          );
        });
    }
  }
};
</script>

<style>
</style>
