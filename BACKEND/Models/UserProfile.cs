using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

[Index("UserId", Name = "UQ__UserProf__1788CC4DDE45D507", IsUnique = true)]
public partial class UserProfile
{
    [Key]
    public int ProfileId { get; set; }

    public int UserId { get; set; }

    public DateOnly? DateOfBirth { get; set; }

    [StringLength(10)]
    public string? Gender { get; set; }

    [StringLength(20)]
    [Unicode(false)]
    public string? IdentityNumber { get; set; }

    [StringLength(255)]
    public string? Address { get; set; }

    [StringLength(255)]
    public string? AvatarUrl { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("UserProfile")]
    public virtual User User { get; set; } = null!;
}
