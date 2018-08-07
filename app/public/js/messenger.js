$(document).ready(() => {
    $('#header').html("Global Chat")
    $('#messenger').html('')
    
    var socket = io('/chat')
    console.log(socket)
    socket.on('disconnect', () => {
        // ;D Temp code to simp view
        setTimeout(() => {
            location.reload()
        }, 1500)
    })
})

    // < div class="col-sm-6 col-md-4 col-lg-2 mb-5" >
    //     <div class="card">
    //         <div class="card-body">
    //             <h5 class="card-title"> Sala </h5>
    //             <h6 class="card-subtitle mb-2 text-muted"> Descrição da sala </h6>
    //             <div class="card-text">
    //                 <ul>
    //                     <li>Azcrew</li>
    //                     <li>Zarkabel</li>
    //                     <li>Eldin</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </div >