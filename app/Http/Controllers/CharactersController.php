<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Characters;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;

class CharactersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        return Inertia::render('characters/index' , [
            'characters' => Characters::with('character:id, name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'species'=> 'required|string'
        ]);

        $request->user()->characters()->create($validated);

        return redirect(route('characters.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Characters $characters, int $id): RedirectResponse
    {
        $characters = Characters::find($id);

        if(empty($characters)) {
            return redirect(route('characters.index'));
        }

        return redirect(route('characters.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Characters $characters)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Characters $characters): RedirectResponse
    {
        Gate::authorize('update', $characters);

        $validated = $request->validate([
            'name' => 'string',
            'species' => 'string',
            'image' => 'string',
            'url' => 'string',
        ]);

        $characters->update($$validated);

        return redirect(route('characters.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Characters $characters , int $id) : RedirectResponse
    {
        Gate::authorize('delete', $characters);

        $characters = Characters::find($id);

        if(empty($characters)) {
            return redirect(route('characters.index'));
        }

        $characters->delete();

        return redirect(route('characters.index'));
    }
}
