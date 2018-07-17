<template>
    <form class="col-lg-4" style="margin:0 auto"  v-on:submit.prevent="">
  <div class="form-group">
    <label for="exampleInputEmail1">user</label>
    <input v-model="id" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="pw" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" @click="login" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
data() {
   return {
   flyPage:'/flyPage',
    id:'',
    pw:'',
   }
 },
  methods:{ 
  login(){
        if(this.id == "amir" && this.pw == "1234"){
             this.$router.push('/flyPage')
        }else{
            alert('fail to login')
        }  
      }
  }
}
</script>

<style>

</style>
