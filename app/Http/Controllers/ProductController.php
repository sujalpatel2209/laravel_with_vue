<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->save();
    }

    public function destroy($id)
    {
        Product::destroy($id);
    }

    public function show($id)
    {
        return Product::where('id',$id)->get();
    }

    public function updateRecord(Request $request){

        $data = array(
            "name" => $request->name,
            "price" => $request->price,
            "description" => $request->desc
        );
        Product::where('id',$request->id)->update($data);
    }

}
