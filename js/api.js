








fetch('https://reqres.in/api/users?page=2')
.then(res=>res.json())
.then(res=>{
	console.log(res)
	
	res.data.forEach(user=>{
		console.log(user.email)
		console.log(user.first_name)
		console.log(user.last_name)
		console.log(user.avatar)

let main= document.querySelector('main')
let div=document.createElement('div')

let img=document.createElement('img')
let h2=document.createElement('h2')
let p=document.createElement('p')

img.src=user.avatar
h2.textContent= user.first_name + user.last_name
p.textContent= user.email
div.append(img)
div.append(h2)
div.append(p)
main.append(div)

	})
})