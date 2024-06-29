<template>
    <form id="login-form">
        <div class="input-container">
            <label for="mail">Email : </label>
            <input type="email" name="mail" id="mail">
        </div>
        <div class="input-container">
            <label for="pass">Mot de passe : </label>
            <input type="password" name="pass" id="pass">
        </div>

        <button disabled="disabled">Se connecter</button>
    </form>    
</template>

<script>
export default {
    name: "LoginForm"
}
</script>

<style scoped>
    #login-form{
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .input-container{
        padding: 10px;
        width: 100%;
        margin-left: 0;
    }
    .input-container label{
        margin-left: 0;
        padding: 5px;
    }
    .input-container input{
        margin-right: 0;
        height: 3.5vh;
        width: 15rem;
        text-align: center;
    }
    #login-form button{
        width: 50%;
        margin: auto;
        margin-top: 2.5vh;
        height: 1.5rem;
        font-weight: 500;
    }
</style>