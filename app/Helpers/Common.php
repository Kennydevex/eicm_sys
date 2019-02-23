<?php
namespace EICM\Helpers;

use Category;
use Entity;
use Image;
use ImageFile;

class Common
{
    public static function verifyCategory($categoryName, $entityName)
    {
        $category = Category::where('name', $categoryName)->first();
        if (!$category) {
            $entity = Entity::where('name', $categoryName)->first();
            if (!$entity) {
                $entity = new Entity();
                $entity->name = $entityName;
                $entity->Description = "Identificação da tabela " . $entityName;
                $entity->status = true;
                $entity->save();
            }

            $category = new Category();
            $category->name = $categoryName;
            $category->Description = "Categoria para a identifição de " . $categoryName . " para a tabela " . $entityName;
            $category->entity()->associate($entity->id);
            $category->save();

            return $category;
        }
        return $category;
    }

    public static function findOrCreateEntity($entityName)
    {

        $entity = Entity::where('name', $entityName)->first();
        if (!$entity) {
            $entity = new Entity();
            $entity->name = $entityName;
            $entity->Description = "Identificação da tabela " . $entityName;
            $entity->status = true;
            $entity->save();
        }
        return $entity;
    }

    public static function storeImage($imageName, $article, $description)
    {
        $image = new ImageFile();
        $image->name = $imageName;
        $image->description = $description;
        $image->article()->associate($article);
        $image->save();
    }

    public static function storeLocalFile($requestImage, $filePath)
    {
        if ($requestImage) {
            $image = $requestImage;
            $imageName = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($requestImage)->save(public_path($filePath) . $imageName);
            return $imageName;
        }

    }

}
