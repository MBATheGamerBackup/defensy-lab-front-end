<script lang="ts">
	import axios from "axios";
	import { push } from "svelte-spa-router";

	let username: string = "";
	let firstName: string = "";
	let lastName: string = "";
	let email: string = "";
	let password: string = "";
	let passwordConfirm: string = "";
	let contact: string = "";
	let place: string = "";

	async function handleSubmission() { 
    	hasBeenClicked = true; 
		if (isValid()) {
			await axios.post("register", {
				"username": username,
				"first-name": firstName,
				"last-name": lastName,
				"email": email,
				"password": password,
				"contact": contact,
				"place": place
			});
			
			await push("/login");			
		};
	};

	const isValid = (): boolean => {
		return isValidUName &&
			   isValidFName &&
			   isValidLName &&
			   isValidEmail &&
			   isValidContact &&
			   isValidPlace &&
			   isValidPassword &&
			   isValidCPassword;
	}

	let hasBeenClicked = false;

	function validateEmail(email:String) {

    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    return emailRegEx.test(String(email).toLowerCase());
  }
  $: isValidUName = username.length > 0;
  $: isValidFName = firstName.length > 0;
  $: isValidLName = lastName.length > 0;
  $: isValidContact = contact.length > 0;
  $: isValidPlace = place.length > 0;
  $: isValidEmail = validateEmail(email);
  $: isValidPassword = password.length >= 8;
  $: isValidCPassword = passwordConfirm == password;

</script>

<main class="form-signin w-100 m-auto">

		<h1 class="h3 mb-3 fw-normal">Sign up</h1>
	
		<div class="form-floating ">
			<input bind:value="{username}" class="form-control" placeholder="Username" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Username</label>
			{#if hasBeenClicked && !isValidUName} 
				<p class="validation-error">Please enter a Valid username</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{firstName}" class="form-control" placeholder="First Name" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>First Name</label>
			{#if hasBeenClicked && !isValidFName} 
				<p class="validation-error">Please enter a Valid Name</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{lastName}" class="form-control" placeholder="Last Name" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Last Name</label>
			{#if hasBeenClicked && !isValidLName} 
				<p class="validation-error">Please enter a Valid Name</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{contact}" class="form-control" placeholder="Contact" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Contact</label>
			{#if hasBeenClicked && !isValidContact} 
				<p class="validation-error">Please enter a Valid Contact</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{place}" class="form-control" placeholder="Place" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Place</label>
			{#if hasBeenClicked && !isValidPlace} 
				<p class="validation-error">Please enter a Valid Place</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{email}" type="email" class="form-control" placeholder="name@example.com" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Email address</label>
			{#if hasBeenClicked && !isValidEmail} 
				<p class="validation-error">Invalid email</p>
			{/if}
		</div>

		<div class="form-floating ">
			<input bind:value="{password}" type="password" class="form-control" placeholder="Password" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Password</label>
			{#if hasBeenClicked && !isValidPassword} 
				<p class="validation-error">Please enter a <strong>Strong</strong> password</p>
			{/if}
			
		</div>

		<div class="form-floating ">
			<input bind:value="{passwordConfirm}" type="password" class="form-control" placeholder="Password Confirm" >
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>Password Confirm</label>
			{#if hasBeenClicked && !isValidCPassword} 
				<p class="validation-error">Passwords does not match!</p>
			{/if}
		</div>

		<button on:click={handleSubmission} class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
	
</main>
<style>
	.form-floating .form-control{
		margin-bottom: 30px;
		width: 400px;
		border: 0;
		border-bottom: 1px solid #212529;
		border-radius: 0;
	}
	.btn {
		margin-top: 10px;
		background-color: transparent;
		color:#132a6a;
		border-color: #ef5f55;
	}
	h1 {
		padding: 15px;
		font-size: 50px;
		color: #132a6a;
	}
  .validation-error {
    color: rgba(255, 0, 0, 0.425);
    margin-top: 5px;
  }
  .btn:hover{
        background-color: #ef5f55;
        color:white;
        border-color: #132a6a;
    }
	.form-signin{
		overflow: hidden;
	}
</style>

