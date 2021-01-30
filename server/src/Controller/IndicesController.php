<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class IndicesController
{
    /**
     * @Route("/")
     */
    public function getIndices(): Response
    {
        $response = new Response();
        $response->setContent(file_get_contents("../data/indices.json"));
        $response->headers->set('Content-Type', 'application/json');
        // Allow all websites
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }

    /**
     * @Route("/{id}", methods={"GET"})
     */
    public function getContentOfIndices(String $id): Response
    {
        $response = new Response();
        $fileName = $id . ".json"; //FileName
        $fileExists = file_exists("../data/" . $fileName);
        if (!$fileExists) {
            $errMsg = ['errMsg' => 'invalidUrl'];
            $response->setContent(json_encode($errMsg));
        } else {
            $content = file_get_contents("../data/" . $fileName);
            $response->setContent($content);
        }

        $response->headers->set('Content-Type', 'application/json');
        // Allow all websites
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}
