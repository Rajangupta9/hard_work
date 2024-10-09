//use ('learn');
//db.oyo.find();

db.oyo.aggregate([
    {
        $match: {NAME: /OYO Flagship/i}}, 
        {$group: {_id: "$NAME", min: {$min: "$ROOM SIZE"}, 
        max: {$max: "$ROOM SIZE"}}}, 
        {$project: {NAME: 1, FINAL_COST: 1, max: 1, min: 1, _id: 0}}  
    ])