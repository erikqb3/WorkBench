using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MyScriptureJournal3.Models;

namespace MyScriptureJournal3.Pages_Journal
{
    public class EditModel : PageModel
    {
        private readonly MyScriptureJournal3Context _context;

        public EditModel(MyScriptureJournal3Context context)
        {
            _context = context;
        }

        [BindProperty]
        public ScriptNotes ScriptNotes { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null || _context.ScriptNotes == null)
            {
                return NotFound();
            }

            var scriptnotes =  await _context.ScriptNotes.FirstOrDefaultAsync(m => m.ID == id);
            if (scriptnotes == null)
            {
                return NotFound();
            }
            ScriptNotes = scriptnotes;
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(ScriptNotes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ScriptNotesExists(ScriptNotes.ID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool ScriptNotesExists(int id)
        {
          return (_context.ScriptNotes?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
