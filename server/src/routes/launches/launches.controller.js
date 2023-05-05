const {launches,addNewLaunch,existLaunch,abortLaunchById} = require('../../models/launches.model')

function getAllLaunches (req,res){
    return res.status(200).json(Array.from(launches.values()))
}

function postNewLaunch (req,res){
    let launch = req.body;
    if(!launch.mission || !launch.target || !launch.launchDate || !launch.rocket ){
        return res.status(400).json({
            error : "missing property"
        })
    }
    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)){
        return res.status(400).json({
            error : "Invaild Date"
    })}

    addNewLaunch(launch);
    return res.status(201).json(launch)
    
}
function deleteLaunch (req,res){
    const launchId = Number(req.params.id)

    if(!existLaunch(launchId))
    return res.status(404).json({
        error:"Not found"
    })
    // if launch exist 

    else{ 
        const aborted = abortLaunchById(launchId)  
        return res.status(200).json(aborted)
    }
}

module.exports ={
    getAllLaunches,
    postNewLaunch,
    deleteLaunch
} 